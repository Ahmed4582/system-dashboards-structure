import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Archive, 
  CreditCard, 
  Package, 
  ShoppingCart, 
  Users, 
  Globe, 
  Truck, 
  UserCheck, 
  Building2, 
  PiggyBank 
} from 'lucide-react'

const servicesData = [
  {
    id: 1,
    title: "الأرشيف",
    description: "تخزين وتنظيم السجلات والوثائق",
    icon: Archive,
    isActive: true
  },
  {
    id: 2,
    title: "الحسابات المالية",
    description: "إدارة الحسابات والمعاملات المالية",
    icon: CreditCard,
    isActive: true
  },
  {
    id: 3,
    title: "إدارة المخازن",
    description: "تتبع وإدارة المخزون بدقة",
    icon: Package,
    isActive: true
  },
  {
    id: 4,
    title: "نقاط البيع",
    description: "إدارة المبيعات ونقاط البيع بكفاءة",
    icon: ShoppingCart,
    isActive: true
  },
  {
    id: 5,
    title: "الإدارة العليا",
    description: "إدارة شاملة لجميع العمليات والخدمات",
    icon: Users,
    isActive: true
  },
  {
    id: 6,
    title: "الاستيراد والتصدير",
    description: "غير متاح حاليا - قيد التطوير",
    icon: Globe,
    isActive: false
  },
  {
    id: 7,
    title: "التوصيل والشحن",
    description: "إدارة عمليات الشحن والتوصيل",
    icon: Truck,
    isActive: false
  },
  {
    id: 8,
    title: "إدارة العملاء",
    description: "تتبع العملاء وتحسين العلاقات",
    icon: UserCheck,
    isActive: true
  },
  {
    id: 9,
    title: "الموارد البشرية",
    description: "إدارة الموظفين والرواتب",
    icon: Building2,
    isActive: true
  },
  {
    id: 10,
    title: "الخزينة المالية",
    description: "إدارة الخزائن والتدفقات النقدية",
    icon: PiggyBank,
    isActive: false
  }
]

const ServicesPage = () => {
  return (
    <div className="min-h-screen" style={{backgroundColor: '#f8fff8'}}>
      <div className="container mx-auto p-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2" style={{color: '#81297f'}}>
            لوحة الخدمات
          </h1>
          <div className="w-24 h-1 mx-auto rounded-full" style={{backgroundColor: '#81297f'}}></div>
        </div>

        {/* First Row - 5 cards */}
        <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-6">
          {servicesData.slice(0, 5).map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Second Row - 4 cards */}
        <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-6 mt-6">
          {/* Empty space for first column */}
          <div className="lg:block md:hidden sm:hidden"></div>
          
          {/* 4 cards in the middle */}
          {servicesData.slice(5, 9).map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Third Row - 1 centered wider card */}
        <div className="flex justify-center mt-6">
          <div className="lg:w-2/5 md:w-2/3 sm:w-full">
            <ServiceCard service={servicesData[9]} />
          </div>
        </div>
      </div>
    </div>
  )
}

const ServiceCard = ({ service }) => {
  const IconComponent = service.icon
  
  return (
    <Card className="h-full hover:shadow-lg transition-shadow duration-300" style={{borderColor: '#e6e6e6'}}>
      <CardHeader className="text-center pb-3">
        <CardTitle 
          className="text-lg font-semibold mb-2"
          style={{color: service.isActive ? '#81297f' : '#515151'}}
        >
          {service.title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="text-center">
        <p 
          className="text-sm mb-4 leading-relaxed"
          style={{color: '#515151'}}
        >
          {service.description}
        </p>
        
        <Button 
          className="w-full"
          style={{
            backgroundColor: service.isActive ? '#81297f' : '#e0e0e0',
            color: service.isActive ? '#ffffff' : '#515151',
            border: 'none'
          }}
          disabled={!service.isActive}
        >
          {service.isActive ? 'الدخول إلى الخدمة' : 'غير متاح حالياً'}
        </Button>
      </CardContent>
    </Card>
  )
}

export default ServicesPage