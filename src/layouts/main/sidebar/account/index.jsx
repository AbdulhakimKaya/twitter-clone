import {Popover, Transition} from "@headlessui/react";
import {useAccount} from "~/store/auth/hooks.js";
import More from "~/layouts/main/sidebar/account/more/index.jsx";

export default function Account() {
    const account = useAccount()

    return (
        <div className="mt-auto">
            <Popover className="relative">
                <Popover.Button
                    className="my-3 p-3 rounded-full w-full flex items-center text-left transition-colors hover:bg-[#eff3f41a] outline-none"
                >
                    <img src={account.avatar} className="w-10 h-10 rounded-full" alt=""/>
                    <div className="mx-3 text-[15px]">
                        <h6 className="font-bold leading-[20px]">{account.fullName}</h6>
                        <div className="text-[#71767b]">
                            @{account.username}
                        </div>
                    </div>
                    <svg viewBox="0 0 24 24" width={18.75} height={18.75} className="ml-auto">
                        <path
                            fill={"#e7e9ea"}
                            d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
                        />
                    </svg>
                </Popover.Button>
                {/*<Transition*/}
                {/*    enter="transition duration-200 ease-out"*/}
                {/*    enterFrom="transform opacity-0"*/}
                {/*    enterTo="transform opacity-100"*/}
                {/*    leave="transition duration-200 ease-out"*/}
                {/*    leaveFrom="transform opacity-100"*/}
                {/*    leaveTo="transform opacity-0"*/}
                {/*>*/}
                <Popover.Panel
                    className="absolute bottom-full w-[300px] py-3 left-1/2 -translate-x-1/2 bg-black shadow-box rounded-2xl overflow-hidden">
                    {({close}) => (
                        <More close={close}/>
                    )}
                </Popover.Panel>
                {/*</Transition>*/}
            </Popover>
        </div>
    )
}