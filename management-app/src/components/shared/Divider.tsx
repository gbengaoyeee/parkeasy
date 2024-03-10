interface DividerProps {
    orientation: 'vertical' | 'horizontal',
    className?: string | undefined
}
const Divider = ({orientation, className}: DividerProps) => {
  return (
    <div className={`${orientation === 'horizontal' ? 'h-[1px]' : 'w-[1px]'} bg-primary-2 ${className}`} />
  )
}

export default Divider