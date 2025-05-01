interface buttonProps {
    title: string;
    bgVariant: 'primary' | 'secondary' | 'outline'
}


export const Button = ({title, bgVariant }: buttonProps) => {
  return (
    <button className={`px-4 py-1 rounded-lg  ${bgVariant === 'primary' ?  'bg-light-100 ' :  bgVariant === 'secondary' ? 'bg-light-100'  : 'border '}  `}>
      {title}
    </button>
  )
}
