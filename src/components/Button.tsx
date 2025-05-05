interface buttonProps {
    title: string;
    bgVariant: 'primary' | 'secondary' | 'outline'
}


export const Button = ({title, bgVariant }: buttonProps) => {
  return (
    <button className={`px-5 py-2 rounded-lg font-medium  ${bgVariant === 'primary' ? 'bg-[#006A71]  text-[#F2EFE7]  ' :  bgVariant === 'secondary' ? 'bg-[#ff9d02] border border-[#ff9d02] text-[#fff] ' : 'border border-[#006A71] text-[#006A71] '}  `}>
      {title}
    </button>
  )
}
 