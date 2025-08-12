import React from 'react'
import {ChartAreaInteractive} from '@/components/ui/chart-area-interactive'
import { ChartRadialShape } from '@/components/ui/chart-radial-shape'
import { ChartTooltipIndicatorLine } from '@/components/ui/chart-tooltip-indicator-line'
import { Card, CardContent } from '@/components/ui/card'
import { Banknote, Coins, Home, ShoppingCart, Package } from 'lucide-react'

const page = () => {
  return (
    <main className='p-4'>
      <h1 className='text-2xl font-bold text-center mb-4' style={{color: '#515151'}}>Statistics</h1>
    
      {/* Currency Section */}
      <Card className='mb-4'>
        <CardContent className='flex items-center justify-between p-6'>
          <div className='flex flex-col'>
            <h2 className='text-xl font-semibold mb-1' style={{color: '#515151'}}>العملة الأساسية</h2>
            <p style={{color: '#515151'}}>ريال سعودي (SAR)</p>
          </div>
          <div className='flex items-center justify-center w-16 h-16 rounded-full' style={{backgroundColor: '#81297f'}}>
            <Banknote className='w-8 h-8 text-white' />
          </div>
        </CardContent>
      </Card>

      {/* Statistics Cards */}
      <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 mb-4'>
        <Card>
          <CardContent className='p-6'>
            <div className='flex items-center justify-between'>
              <div className='flex flex-col'>
                <p className='text-3xl font-bold' style={{color: '#515151'}}>89.2k</p>
                <p className='text-sm font-medium' style={{color: '#515151'}}>إجمالي الإيرادات</p>
                <p className='text-xs' style={{color: '#515151'}}>الأرباح هذا الشهر (ريال)</p>
              </div>
              <div className='flex items-center justify-center w-12 h-12 rounded-full' style={{backgroundColor: '#81297f'}}>
                <Coins className='w-6 h-6 text-white' />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className='p-6'>
            <div className='flex items-center justify-between'>
              <div className='flex flex-col'>
                <p className='text-3xl font-bold' style={{color: '#515151'}}>324</p>
                <p className='text-sm font-medium' style={{color: '#515151'}}>طلبات التأجير</p>
                <p className='text-xs' style={{color: '#515151'}}>إجمالي طلبات الإيجار</p>
              </div>
              <div className='flex items-center justify-center w-12 h-12 rounded-full' style={{backgroundColor: '#81297f'}}>
                <Home className='w-6 h-6 text-white' />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className='p-6'>
            <div className='flex items-center justify-between'>
              <div className='flex flex-col'>
                <p className='text-3xl font-bold' style={{color: '#515151'}}>856</p>
                <p className='text-sm font-medium' style={{color: '#515151'}}>طلبات البيع</p>
                <p className='text-xs' style={{color: '#515151'}}>إجمالي طلبات الشراء</p>
              </div>
              <div className='flex items-center justify-center w-12 h-12 rounded-full' style={{backgroundColor: '#81297f'}}>
                <ShoppingCart className='w-6 h-6 text-white' />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className='p-6'>
            <div className='flex items-center justify-between'>
              <div className='flex flex-col'>
                <p className='text-3xl font-bold' style={{color: '#515151'}}>1,247</p>
                <p className='text-sm font-medium' style={{color: '#515151'}}>إجمالي المنتجات</p>
                <p className='text-xs' style={{color: '#515151'}}>المنتجات المتاحة في المتجر</p>
              </div>
              <div className='flex items-center justify-center w-12 h-12 rounded-full' style={{backgroundColor: '#81297f'}}>
                <Package className='w-6 h-6 text-white' />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    
        {/* Main Chart - Takes 8 columns on large screens */}
        <div className='lg:col-span-12 md:col-span-12 sm:col-span-12'>
          <ChartAreaInteractive />
        </div>
        
        {/* Side Charts - Take 4 columns on large screens */}

          <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 mt-4 w-full'>
            <ChartRadialShape />
            <ChartTooltipIndicatorLine />
            <ChartRadialShape />
            <ChartTooltipIndicatorLine />
        </div>
    </main>
  )
}

export default page