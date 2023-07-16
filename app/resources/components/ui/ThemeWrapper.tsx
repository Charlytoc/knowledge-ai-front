
export default function ThemeWrapper ({
    children,
  }: {
    children: React.ReactNode
  }) {
return (
    <div className="component-theme-wrapper">
        {children}
    </div>
)

}