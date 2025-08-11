"use client"

import { Bell } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

export function NotificationsMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          {/* Badge small notification dot */}
          <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-red-500"></span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="" className="w-72 ml-2">
        <DropdownMenuLabel>الإشعارات</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuItem className={"text-start"}>
           لديك رسالة جديدة من أحمد
        </DropdownMenuItem>

        <DropdownMenuItem>
          ✅ تم قبول طلبك بنجاح
        </DropdownMenuItem>

        <DropdownMenuItem>
          🔔 تذكير: الاجتماع بعد 30 دقيقة
        </DropdownMenuItem>

        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-blue-600 cursor-pointer">
          عرض كل الإشعارات
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
