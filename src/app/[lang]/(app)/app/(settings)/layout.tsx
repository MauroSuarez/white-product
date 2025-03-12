import SettingLayout from "@/presentation/layouts/app/settings"

export default function Layout({
  children
}: { children: React.ReactNode }) {
  return (
    <SettingLayout>
      {children}
    </SettingLayout>
  )
}