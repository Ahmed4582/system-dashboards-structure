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
    title: "HRPanel",
    description: "لوحة الموارد البشرية",
    icon: Building2,
    isActive: true
  },
  {
    id: 2,
    title: "CRMPanel",
    description: "لوحة علاقات العملاء",
    icon: UserCheck,
    isActive: true
  },
  {
    id: 3,
    title: "FinancePanel",
    description: "لوحة الحسابات المالية",
    icon: CreditCard,
    isActive: true
  },
  {
    id: 4,
    title: "POSPanel",
    description: "لوحة نقاط البيع",
    icon: ShoppingCart,
    isActive: true
  },
  {
    id: 5,
    title: "InventoryPanel",
    description: "لوحة إدارة المخازن",
    icon: Package,
    isActive: true
  },
  {
    id: 6,
    title: "ManagementPanel",
    description: "لوحة الإدارة",
    icon: Users,
    isActive: true
  },
  {
    id: 7,
    title: "Archive",
    description: "الأرشيف",
    icon: Archive,
    isActive: true
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

        {/* Grid */}
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
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
        <div className="mx-auto mb-2 w-10 h-10 rounded-full flex items-center justify-center" style={{backgroundColor: '#f3e8f9'}}>
          <IconComponent className="w-5 h-5" style={{color: '#81297f'}} />
        </div>
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