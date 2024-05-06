/*
 * @Author: yinlianghui@hotoa.com yinlianghui@hotoa.com
 * @Date: 2024-02-23 22:22:25
 * @LastEditors: yinlianghui@hotoa.com yinlianghui@hotoa.com
 * @LastEditTime: 2024-04-06 07:16:23
 * @FilePath: /nextjs-dashboard/app/layout.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import '@/app/ui/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
