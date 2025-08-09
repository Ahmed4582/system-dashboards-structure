import ProtofolioCard from './ProtofolioCard';

const portfolioData = [
  {
    id: 1,
    title: 'ONLINE EDUCATION',
    subtitle: 'منصة تأهيل معلمين',
    description: 'نظام تدريب إلكتروني متخصص للمعلمين يهدف\nلبناء القدرات والمهارات التعليمية',
    image: '/images/heroConsultions.jpg',
    rating: 5,
    buttonText: 'عرض المشروع',
  },
  {
    id: 2,
    title: 'ONLINE EDUCATION',
    subtitle: 'منصة تأهيل معلمين',
    description: 'نظام تدريب إلكتروني متخصص للمعلمين يهدف\nلبناء القدرات والمهارات التعليمية',
    image: '/images/heroConsultions.jpg',
    rating: 5,
    buttonText: 'عرض المشروع',
  },
  {
    id: 3,
    title: 'ONLINE EDUCATION',
    subtitle: 'منصة تأهيل معلمين',
    description: 'نظام تدريب إلكتروني متخصص للمعلمين يهدف\nلبناء القدرات والمهارات التعليمية',
    image: '/images/heroConsultions.jpg',
    rating: 5,
    buttonText: 'عرض المشروع',
  },
  {
    id: 4,
    title: 'ONLINE EDUCATION',
    subtitle: 'منصة تأهيل معلمين',
    description: 'نظام تدريب إلكتروني متخصص للمعلمين يهدف\nلبناء القدرات والمهارات التعليمية',
    image: '/images/heroConsultions.jpg',
    rating: 5,
    buttonText: 'عرض المشروع',
  },
  {
    id: 5,
    title: 'ONLINE EDUCATION',
    subtitle: 'منصة تأهيل معلمين',
    description: 'نظام تدريب إلكتروني متخصص للمعلمين يهدف\nلبناء القدرات والمهارات التعليمية',
    image: '/images/heroConsultions.jpg',
    rating: 5,
    buttonText: 'عرض المشروع',
  },
];

export default function PortofolioList() {
  return (
    <div className=" max-w-[95%] mx-auto md:p-8 p-4 grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center md:gap-8 gap-4">
      {portfolioData.map((item) => (
        <ProtofolioCard key={item.id} {...item} />
      ))}
    </div>
  );
}