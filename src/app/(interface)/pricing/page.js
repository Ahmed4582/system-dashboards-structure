import React from 'react'
import Pricing from './_components/Pricing'
// import { getPrices } from '@/utils/serviceFeatching'

const page =async () => {
  // const prices = await getPrices()
  console.log(prices)
  return (
    <div>
        <Pricing prices={prices} />
    </div>
  )
}

export default page