"use client";
import { useState, useEffect } from "react";
import {
  Calendar,
  Clock,
  Timer,
  X,
  Plus,
  Trash2,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Loader2,
} from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import { EnrolePost } from "../../_utils/postReques";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";

// Custom Toast Component
const Toast = ({ toast: customToastData, onClose }) => {
  if (!customToastData) return null;

  const getToastStyles = (type) => {
    switch (type) {
      case "error":
        return "bg-red-50 border-red-500 text-red-800";
      case "success":
        return "bg-green-50 border-green-500 text-green-800";
      default:
        return "bg-blue-50 border-blue-500 text-blue-800";
    }
  };

  const getToastIcon = (type) => {
    switch (type) {
      case "error":
        return (
          <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
        );
      case "success":
        return (
          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
        );
      default:
        return (
          <AlertTriangle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
        );
    }
  };

  return (
    <div
      className={`fixed top-4 right-4 z-[60] max-w-md p-4 rounded-lg shadow-lg border-l-4 transition-all duration-300 ${getToastStyles(
        customToastData.type
      )}`}
    >
      <div className="flex items-start gap-3">
        {getToastIcon(customToastData.type)}
        <div className="flex-1">
          <p className="text-sm font-medium">{customToastData.message}</p>
        </div>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

const DURATION_OPTIONS = [
  { minutes: 15, label: "00:15 (ربع ساعة)" },
  { minutes: 30, label: "00:30 (نصف ساعة)" },
  { minutes: 45, label: "00:45 (ثلاة أرباع ساعة)" },
  { minutes: 60, label: "01:00 (ساعة واحدة)" },
  { minutes: 75, label: "01:15 (ساعة وربع)" },
  { minutes: 90, label: "01:30 (ساعة ونصف)" },
  { minutes: 105, label: "01:45 (ساعة وثلاثة أرباع)" },
  { minutes: 120, label: "02:00 (ساعتان)" },
];

// Utility Functions
const generateTimeOptions = (max = 24) => {
  return Array.from({ length: max }, (_, i) => i.toString().padStart(2, "0"));
};

export default function Booking({
  planData,
  onClose,
  studentId,
  courseId,
  plan,
}) {
  // State Management
  const { currentLanguage } = useLanguage();
  const t =
    translations.interface[currentLanguage] || translations.interface.en;
  const [selectedDays, setSelectedDays] = useState([]);
  const [customToast, setCustomToast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const AVAILABLE_DAYS = [
    { label: t.monday, value: "Mon" },
    { label: t.tuesday, value: "Tue" },
    { label: t.wednesday, value: "Wed" },
    { label: t.thursday, value: "Thu" },
    { label: t.friday, value: "Fri" },
    { label: t.saturday, value: "Sat" },
    { label: t.sunday, value: "Sun" },
  ];
  // Configuration
  const monthlyHours = plan || 8;

  // Toast Functions
  const showToast = (message, type = "info") => {
    setCustomToast({ message, type });
    setTimeout(() => setCustomToast(null), 4000);
  };

  const closeToast = () => setCustomToast(null);

  // Calculation Functions
  const calculateTotalBookedHours = () => {
    return selectedDays.reduce((total, day) => {
      if (day.duration) {
        const durationInHours = parseFloat(day.duration) / 60;
        return total + durationInHours * 4; // 4 weeks per month
      }
      return total;
    }, 0);
  };

  const calculateRemainingHours = () => {
    return monthlyHours - calculateTotalBookedHours();
  };

  const checkIfDaysCanFitHours = (daysCount) => {
    const minHoursPerDay = 0.25; // 15 minutes
    const minTotalHoursNeeded = daysCount * minHoursPerDay * 4;
    return minTotalHoursNeeded <= monthlyHours;
  };

  const calculateDurationOptions = (
    selectedDaysCount,
    currentDayValue = null
  ) => {
    if (selectedDaysCount === 0) return [];

    const bookedHoursFromOtherDays = selectedDays.reduce((total, day) => {
      if (day.day_of_week !== currentDayValue && day.duration) {
        const durationInHours = parseFloat(day.duration) / 60;
        return total + durationInHours * 4;
      }
      return total;
    }, 0);

    const remainingHours = monthlyHours - bookedHoursFromOtherDays;
    const daysWithoutDuration = selectedDays.filter(
      (day) => !day.duration || day.day_of_week === currentDayValue
    ).length;

    if (daysWithoutDuration === 0) return [];

    const validOptions = DURATION_OPTIONS.filter((option) => {
      const durationInHours = option.minutes / 60;
      const hoursForThisDay = durationInHours * 4;

      if (hoursForThisDay > remainingHours) return false;

      if (daysWithoutDuration === 1) {
        return Math.abs(remainingHours - hoursForThisDay) < 0.5;
      } else {
        const remainingHoursAfterThisDay = remainingHours - hoursForThisDay;
        const otherDaysCount = daysWithoutDuration - 1;
        const minHoursPerDay = 1;
        const maxHoursPerDay = 8;
        const minTotalForOtherDays = otherDaysCount * minHoursPerDay;
        const maxTotalForOtherDays = otherDaysCount * maxHoursPerDay;

        return (
          remainingHoursAfterThisDay >= minTotalForOtherDays &&
          remainingHoursAfterThisDay <= maxTotalForOtherDays
        );
      }
    });

    return validOptions.map((option) => ({
      value: option.minutes.toString(),
      label: option.label,
    }));
  };

  // Event Handlers
  const toggleDay = (dayValue) => {
    setSelectedDays((prev) => {
      const exists = prev.find((day) => day.day_of_week === dayValue);

      if (exists) {
        return prev.filter((day) => day.day_of_week !== dayValue);
      } else {
        const newDaysCount = prev.length + 1;

        if (!checkIfDaysCanFitHours(newDaysCount)) {
          showToast(t.daysExceedWarning, "error");
          return prev;
        }

        const newDays = [...prev, { day_of_week: dayValue }].map((day) => ({
          day_of_week: day.day_of_week,
          hours: "",
          minutes: "",
          seconds: "",
          duration: "",
        }));
        return newDays;
      }
    });
  };

  const updateDaySchedule = (dayValue, field, value) => {
    setSelectedDays((prev) =>
      prev.map((day) =>
        day.day_of_week === dayValue ? { ...day, [field]: value } : day
      )
    );
  };

  const removeDaySchedule = (dayValue) => {
    setSelectedDays((prev) =>
      prev.filter((day) => day.day_of_week !== dayValue)
    );
  };

  const handleSubmit = async () => {
    const allFieldsFilled = selectedDays.every(
      (day) => day.hours && day.minutes && day.seconds && day.duration
    );

    if (selectedDays.length > 0 && allFieldsFilled) {
      setIsLoading(true);
      const totalBookedHours = calculateTotalBookedHours();

      const appointmentData = {
        ...planData,
        student_times: selectedDays.map((day) => {
          return {
            day_of_week: day.day_of_week,
            start_time: `${day.hours}:${day.minutes}:${day.seconds}`,
            duration: parseInt(day.duration), // Send as integer minutes
          };
        }),
      };

      console.log("Appointment Data:", appointmentData);

      try {
        const res = await EnrolePost(appointmentData);
        toast.success(res.message || "تم الحجز بنجاح!");
        setSelectedDays([]);
      } catch (error) {
        console.error(error);
        toast.error(
          error.message || "حدث خطأ أثناء الحجز. يرجى المحاولة مرة أخرى."
        );
      } finally {
        setIsLoading(false);
        onClose();
      }
    } else {
      toast.error("يرجى ملء جميع الحقول لكل يوم مختار");
    }
  };

  // Computed Values
  const totalBookedHours = calculateTotalBookedHours();
  const remainingHours = calculateRemainingHours();
  const isFormValid =
    selectedDays.length > 0 &&
    selectedDays.every(
      (day) => day.hours && day.minutes && day.seconds && day.duration
    );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <Toaster position="top-right" />
      {/* Custom Toast */}
      <Toast toast={customToast} onClose={closeToast} />

      <div className="bg-white dark:bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <div>
            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">
              {t.bookingweeks}
            </h2>
            <p className="text-sm  text-gray-600 dark:text-gray-400 mt-1">
              {t.summaryCourseMonth} {monthlyHours} {t.bookingmonthly}{" "}
              {totalBookedHours.toFixed(1)}
              {t.remailyhour} {remainingHours.toFixed(1)}
            </p>
            {planData?.planDetails && (
              <p className="text-xs text-blue-600 dark:text-blue-400 mt-1">
                {t.planbooking} {planData.planDetails.name} -{" "}
                {planData.planDetails.price} {planData.planDetails.currency}
              </p>
            )}
          </div>
          <button
            onClick={onClose}
            disabled={isLoading}
            className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors disabled:opacity-50"
          >
            <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Course Hours Info */}
          <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg border border-blue-200 dark:border-blue-700">
            <div className="flex items-center gap-2 mb-2">
              <Timer className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span className="font-medium text-blue-800 dark:text-blue-200">
                {t.summaryCourseMonthbooking}
              </span>
            </div>
            <div className="grid grid-cols-4 gap-3 text-sm">
              <div className="text-center">
                <div className="font-bold text-lg text-blue-600 dark:text-blue-400">
                  {monthlyHours}
                </div>
                <div className="text-blue-700 dark:text-blue-300">
                  {t.hourweek}
                </div>
              </div>
              <div className="text-center">
                <div className="font-bold text-lg text-purple-600 dark:text-purple-400">
                  {selectedDays.length * 4}
                </div>
                <div className="text-purple-700 dark:text-purple-300">
                  {t.weekday}
                </div>
              </div>
              <div className="text-center">
                <div className="font-bold text-lg text-green-600 dark:text-green-400">
                  {totalBookedHours.toFixed(1)}
                </div>
                <div className="text-green-700 dark:text-green-300">
                  {t.bookedhour}
                </div>
              </div>
              <div className="text-center">
                <div className="font-bold text-lg text-orange-600 dark:text-orange-400">
                  {remainingHours.toFixed(1)}
                </div>
                <div className="text-orange-700 dark:text-orange-300">
                  {t.remailyhour}
                </div>
              </div>
            </div>
            {remainingHours < 0 && (
              <div className="mt-2 p-2 bg-red-100 dark:bg-red-900 border border-red-300 dark:border-red-700 rounded text-red-700 dark:text-red-300 text-sm">
                {t.warnningBooking}
              </div>
            )}
          </div>

          {/* Reset Warning */}
          {selectedDays.some((day) => day.duration) && (
            <div className="bg-yellow-50 dark:bg-yellow-900 p-3 rounded-lg border border-yellow-200 dark:border-yellow-700">
              <p className="text-sm text-yellow-800 dark:text-yellow-200">
                ⚠️ <strong> {t.NoticeBooking}</strong> {t.resetDaysWarning}
              </p>
            </div>
          )}

          {/* Day Selection */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
              <Calendar className="w-4 h-4" />
              {t.choceDayBooking} ({selectedDays.length} {t.selectedDaybooking})
            </label>
            <div className="grid grid-cols-2 gap-3">
              {AVAILABLE_DAYS.map((day) => {
                const isSelected = selectedDays.some(
                  (selected) => selected.day_of_week === day.value
                );
                return (
                  <button
                    key={day.value}
                    onClick={() => toggleDay(day.value)}
                    disabled={isLoading}
                    className={`p-4 rounded-lg border-2 transition-all text-center disabled:opacity-50 ${
                      isSelected
                        ? "border-blue-500 bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-300 shadow-md"
                        : "border-gray-200 dark:border-gray-600 hover:border-blue-300 hover:bg-blue-25 dark:hover:bg-gray-700"
                    }`}
                  >
                    <div className="font-semibold text-lg">{day.label}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Duration Options Info */}
          {/* {selectedDays.length > 0 && (
            <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg border border-green-200 dark:border-green-700">
              <h4 className="font-medium text-green-800 dark:text-green-200 mb-2">
                توزيع الساعات الشهرية:
              </h4>
              <div className="grid grid-cols-2 gap-4 text-sm text-green-700 dark:text-green-300">
                <div>
                  <strong>أيام في الأسبوع:</strong> {selectedDays.length} أيام
                </div>
                <div>
                  <strong>أيام في الشهر:</strong> {selectedDays.length * 4} يوم
                </div>
                <div>
                  <strong>المدة المقترحة/يوم:</strong>{" "}
                  {selectedDays.length > 0
                    ? ((monthlyHours / (selectedDays.length * 4)) * 60).toFixed(
                        0
                      )
                    : 0}{" "}
                  دقيقة
                </div>
                <div>
                  <strong>ساعات أسبوعية:</strong>{" "}
                  {(monthlyHours / 4).toFixed(1)} ساعة
                </div>
              </div>

              {selectedDays.length > 0 &&
                !checkIfDaysCanFitHours(selectedDays.length) && (
                  <div className="mt-3 p-2 bg-red-100 dark:bg-red-900 border border-red-300 dark:border-red-700 rounded text-red-700 dark:text-red-300 text-sm">
                    ⚠️ تحذير: عدد الأيام المحددة قد يكون كثيراً بالنسبة لساعات
                    الكورس المتاحة!
                  </div>
                )}
            </div>
          )} */}

          {selectedDays.length > 0 && (
            <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg border border-green-200 dark:border-green-700">
              <h4 className="font-medium text-green-800 dark:text-green-200 mb-2">
                {t.monthlyHoursDistribution}
              </h4>
              <div className="grid grid-cols-2 gap-4 text-sm text-green-700 dark:text-green-300">
                <div>
                  <strong>{t.weekDays}:</strong> {selectedDays.length} {t.days}
                </div>
                <div>
                  <strong>{t.monthDays}:</strong> {selectedDays.length * 4}{" "}
                  {t.day}
                </div>
                <div>
                  <strong>{t.suggestedDurationPerDay}:</strong>{" "}
                  {selectedDays.length > 0
                    ? ((monthlyHours / (selectedDays.length * 4)) * 60).toFixed(
                        0
                      )
                    : 0}{" "}
                  {t.minutes}
                </div>
                <div>
                  <strong>{t.weeklyHours}:</strong>{" "}
                  {(monthlyHours / 4).toFixed(1)} {t.hour}
                </div>
              </div>

              {selectedDays.length > 0 &&
                !checkIfDaysCanFitHours(selectedDays.length) && (
                  <div className="mt-3 p-2 bg-red-100 dark:bg-red-900 border border-red-300 dark:border-red-700 rounded text-red-700 dark:text-red-300 text-sm">
                    ⚠️ {t.daysExceedWarning}
                  </div>
                )}
            </div>
          )}

          {/* Selected Days Schedule Configuration */}

          {selectedDays.length > 0 && (
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
                <Clock className="w-4 h-4" />
                {t.configureScheduleForSelectedDays}
              </label>
              <div className="space-y-4">
                {selectedDays.map((selectedDay) => {
                  const dayInfo = AVAILABLE_DAYS.find(
                    (d) => d.value === selectedDay.day_of_week
                  );
                  const durationOptions = calculateDurationOptions(
                    selectedDays.length,
                    selectedDay.day_of_week
                  );

                  return (
                    <div
                      key={selectedDay.day_of_week}
                      className="border border-gray-200 dark:border-gray-600 rounded-lg p-4 bg-gray-50 dark:bg-gray-700"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="font-medium text-gray-800 dark:text-gray-200">
                          {dayInfo?.label}
                        </div>
                        <button
                          onClick={() =>
                            removeDaySchedule(selectedDay.day_of_week)
                          }
                          disabled={isLoading}
                          className="text-red-500 hover:text-red-700 p-1 disabled:opacity-50"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="grid grid-cols-4 gap-3">
                        {/* Hours */}
                        <div>
                          <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1">
                            {t.hour}
                          </label>
                          <select
                            value={selectedDay.hours}
                            onChange={(e) =>
                              updateDaySchedule(
                                selectedDay.day_of_week,
                                "hours",
                                e.target.value
                              )
                            }
                            disabled={isLoading}
                            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 disabled:opacity-50"
                          >
                            <option value="">--</option>
                            {generateTimeOptions(24).map((hour) => (
                              <option key={hour} value={hour}>
                                {hour}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Minutes */}
                        <div>
                          <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1">
                            {t.minute}
                          </label>
                          <select
                            value={selectedDay.minutes}
                            onChange={(e) =>
                              updateDaySchedule(
                                selectedDay.day_of_week,
                                "minutes",
                                e.target.value
                              )
                            }
                            disabled={isLoading}
                            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 disabled:opacity-50"
                          >
                            <option value="">--</option>
                            {generateTimeOptions(60).map((minute) => (
                              <option key={minute} value={minute}>
                                {minute}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Seconds */}
                        <div>
                          <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1">
                            {t.second}
                          </label>
                          <select
                            value={selectedDay.seconds}
                            onChange={(e) =>
                              updateDaySchedule(
                                selectedDay.day_of_week,
                                "seconds",
                                e.target.value
                              )
                            }
                            disabled={isLoading}
                            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 disabled:opacity-50"
                          >
                            <option value="">--</option>
                            {generateTimeOptions(60).map((second) => (
                              <option key={second} value={second}>
                                {second}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Duration */}
                        <div>
                          <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1">
                            {t.durationH_M}
                            {durationOptions.length === 0 && (
                              <span className="text-red-500 text-xs block">
                                {t.noAvailableOptions}
                              </span>
                            )}
                          </label>
                          <select
                            value={selectedDay.duration}
                            onChange={(e) =>
                              updateDaySchedule(
                                selectedDay.day_of_week,
                                "duration",
                                e.target.value
                              )
                            }
                            disabled={isLoading || durationOptions.length === 0}
                            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 disabled:opacity-50"
                          >
                            <option value="">{t.chooseDuration}</option>
                            {durationOptions.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          <div className="flex gap-4 pt-4">
            <button
              onClick={onClose}
              disabled={isLoading}
              className="flex-1 px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {t.cancel}
            </button>
            <button
              onClick={handleSubmit}
              disabled={!isFormValid || isLoading}
              className={`flex-1 px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 ${
                isFormValid && !isLoading
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : "bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed"
              }`}
            >
              {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
              {isLoading ? t.bookingInProgress : t.confirmBooking}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


// bookingweeks: " حجز مواعيد أسبوعية ",
//   summaryCourseMonth: "إجمالي ساعات الكورس الشهرية:",
//   bookingmonthly: "ساعة | محجوز شهرياً:",
//   remailyhour: " ساعة | متبقي:",
//   planbooking: " الخطة:",
//   summaryCourseMonthbooking: "  معلومات الكورس الشهري",
//   hourweek: "ساعات شهريه",
//   weekday: "ايام شهريه",
//   bookedhour: "ساعات محجوزة",
//   remilyhour: "ساعات متبقية",
//   warnningBooking:
//     "   تحذير: إجمالي الساعات المحجوزة يتجاوز ساعات الكورس المتاحة شهرياً! ",
//   NoticeBooking: "تنبيه:",
//   resetDaysWarning:
//     "عند إضافة أو حذف أيام جديدة، سيتم إعادة تعيين جميع الأوقات والمدد المحددة مسبقاً.",
//   selectedDaybooking: "يوم مختار",
//   choceDayBooking: "اختر ايام الاسبوع",
//   monthlyHoursDistribution: "توزيع الساعات الشهرية",
//   weekDays: "أيام في الأسبوع",
//   monthDays: "أيام في الشهر",
//   suggestedDurationPerDay: "المدة المقترحة/يوم",
//   weeklyHours: "ساعات أسبوعية",
//   days: "أيام",
//   day: "يوم",
//   minutes: "دقيقة",
//   hour: "ساعة",
//   daysExceedWarning:
//     "تحذير: عدد الأيام المحددة قد يكون كثيراً بالنسبة لساعات الكورس المتاحة!",
//   configureScheduleForSelectedDays: "تكوين الجدول الزمني للأيام المختارة",
//   hour: "ساعة",
//   minute: "دقيقة",
//   second: "ثانية",
//   durationH_M: "المدة (س:د)",
//   noAvailableOptions: "لا توجد خيارات متاحة",
//   chooseDuration: "اختر المدة",
//   cancel: "إلغاء",
//   bookingInProgress: "جاري الحجز...",
//   confirmBooking: "تأكيد الحجز",
//   monday: "الاثنين",
//   tuesday: "الثلاثاء",
//   wednesday: "الأربعاء",
//   thursday: "الخميس",
//   friday: "الجمعة",
//   saturday: "السبت",
//   sunday: "الأحد",

  // ... existing code ...


  //  bookingweeks: "Weekly Appointment Booking",
  // summaryCourseMonth: "Total Monthly Course Hours:",
  // bookingmonthly: "Hour | Booked Monthly:",
  // remailyhour: "Hour | Remaining:",
  // planbooking: "Plan:",
  // summaryCourseMonthbooking: "Monthly Course Information",
  // hourweek: "Monthly Hours",
  // weekday: "Monthly Days",
  // bookedhour: "Booked Hours",
  // remailyhour: "Remaining Hours",
  // warnningBooking:
  //   "Warning: The total booked hours exceed the available course hours for the month!",
  // NoticeBooking: "Warning:",
  // resetDaysWarning:
  //   "When adding or deleting new days, all previously set times and durations will be reset.",

  // selectedDaybooking: "Selected Day",
  // choceDayBooking: "Select Week days",
  // monthlyHoursDistribution: "Monthly Hours Distribution",
  // weekDays: "Days in Week",
  // monthDays: "Days in Month",
  // suggestedDurationPerDay: "Suggested Duration/Day",
  // weeklyHours: "Weekly Hours",
  // days: "Days",
  // day: "Day",
  // minutes: "Minutes",
  // hour: "Hour",
  // daysExceedWarning:
  //   "Warning: The selected number of days may exceed the available course hours!",
  // configureScheduleForSelectedDays: "Configure Schedule for Selected Days",
  // hour: "Hour",
  // minute: "Minute",
  // second: "Second",
  // durationH_M: "Duration (H:M)",
  // noAvailableOptions: "No available options",
  // chooseDuration: "Choose Duration",
  // cancel: "Cancel",
  // bookingInProgress: "Booking in progress...",
  // confirmBooking: "Confirm Booking",
  // monday: "Monday",
  // tuesday: "Tuesday",
  // wednesday: "Wednesday",
  // thursday: "Thursday",
  // friday: "Friday",
  // saturday: "Saturday",
  // sunday: "Sunday",


