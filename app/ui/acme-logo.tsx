/*
 * @Author: yinlianghui@hotoa.com yinlianghui@hotoa.com
 * @Date: 2024-02-23 22:22:25
 * @LastEditors: yinlianghui@hotoa.com yinlianghui@hotoa.com
 * @LastEditTime: 2024-04-26 06:45:23
 * @FilePath: /nextjs-dashboard/app/ui/acme-logo.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { GlobeAltIcon } from '@heroicons/react/24/outline';
// import { lusitana } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`flex flex-row items-center leading-none text-white`}
    >
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[44px]">Acme</p>
    </div>
  );
}
