/*
 * @Author: yinlianghui@hotoa.com yinlianghui@hotoa.com
 * @Date: 2024-04-26 06:38:20
 * @LastEditors: yinlianghui@hotoa.com yinlianghui@hotoa.com
 * @LastEditTime: 2024-05-03 07:05:24
 * @FilePath: /nextjs-dashboard/app/dashboard/layout.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import SideNav from '@/app/ui/dashboard/sidenav';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-64">
                <SideNav />
            </div>
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
        </div>
    );
}