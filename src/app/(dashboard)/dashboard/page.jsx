import { Card, CardContent } from '../../../components/ui/card'
import React from 'react'

const page = () => {
  return (
    <main className='p-6 w-full mx-auto'>  
      {/* Overview stub content */}
      <Card className='mb-8'>
        <CardContent className='flex items-center justify-between p-6'>
          <div className='flex flex-col'>
            <h2 className='text-xl font-semibold mb-1' style={{color: '#515151'}}>نظرة عامة</h2>
            <p style={{color: '#515151'}}>مرحبا بك، هذه صفحة لوحة التحكم.</p>
          </div>
          <div className='flex items-center justify-center w-16 h-16 rounded-full' style={{backgroundColor: '#81297f'}} />
        </CardContent>
      </Card>

      {/* Statistics Cards - placeholder */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'>
        <Card className='hover:shadow-lg transition-shadow duration-200'>
          <CardContent className='p-6'>
            <div className='flex items-center justify-between'>
              <div className='flex flex-col'>
                <p className='text-2xl xl:text-3xl font-bold' style={{color: '#81297f'}}>--</p>
                <p className='text-sm font-medium' style={{color: '#515151'}}>Placeholder</p>
                <p className='text-xs' style={{color: '#515151'}}>يمكنك تعديل هذه البطاقات لاحقا</p>
              </div>
              <div className='flex items-center justify-center w-12 h-12 rounded-full' style={{backgroundColor: '#81297f'}} />
            </div>
          </CardContent>
        </Card>

        <Card className='hover:shadow-lg transition-shadow duration-200'>
          <CardContent className='p-6'>
            <div className='flex items-center justify-between'>
              <div className='flex flex-col'>
                <p className='text-2xl xl:text-3xl font-bold' style={{color: '#81297f'}}>--</p>
                <p className='text-sm font-medium' style={{color: '#515151'}}>Placeholder</p>
                <p className='text-xs' style={{color: '#515151'}}>قابلة للتخصيص</p>
              </div>
              <div className='flex items-center justify-center w-12 h-12 rounded-full' style={{backgroundColor: '#81297f'}} />
            </div>
          </CardContent>
        </Card>

        <Card className='hover:shadow-lg transition-shadow duration-200'>
          <CardContent className='p-6'>
            <div className='flex items-center justify-between'>
              <div className='flex flex-col'>
                <p className='text-2xl xl:text-3xl font-bold' style={{color: '#81297f'}}>--</p>
                <p className='text-sm font-medium' style={{color: '#515151'}}>Placeholder</p>
                <p className='text-xs' style={{color: '#515151'}}>نص تجريبي</p>
              </div>
              <div className='flex items-center justify-center w-12 h-12 rounded-full' style={{backgroundColor: '#81297f'}} />
            </div>
          </CardContent>
        </Card>

        <Card className='hover:shadow-lg transition-shadow duration-200'>
          <CardContent className='p-6'>
            <div className='flex items-center justify-between'>
              <div className='flex flex-col'>
                <p className='text-2xl xl:text-3xl font-bold' style={{color: '#81297f'}}>--</p>
                <p className='text-sm font-medium' style={{color: '#515151'}}>Placeholder</p>
                <p className='text-xs' style={{color: '#515151'}}>—</p>
              </div>
              <div className='flex items-center justify-center w-12 h-12 rounded-full' style={{backgroundColor: '#81297f'}} />
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}

export default page


