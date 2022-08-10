import tw from "tailwind-styled-components";

export const Container = tw.div`
    px-4
`;

export const LoginTitle = tw.div`
    pt-14 
    pb-6 
    text-center 
    text-2xl 
    font-bold
`;

export const LoginContainer = tw.div``;

export const TabContainer = tw.div`
    mt-6 
    grid 
    grid-cols-2 
    w-full
`;

export const Tab = tw.button`
    pb-4 
    border-b-2 
`;

export const LoginForm = tw.form`
    mt-8
`;

export const LoginFormTitle = tw.label`
    text-gray-500
`;

export const LoginInput = tw.input`
    w-full 
    border-gray-300 
    focus:border-orange-400 
    focus:ring-1
    focus:ring-orange-400 
    rounded-md
`;

export const PhoneContainer = tw.div`
    flex 
    rounded-md 
    shadow-sm
    mt-3
`;

export const PhoneTitle = tw.span`
    flex 
    items-center 
    justify-center 
    px-3 
    rounded-l-md 
    border 
    text-gray-500
    border-gray-300
    border-r-0
    text-sm
`;

export const LineContainer = tw.div`
    relative
`

export const Line = tw.div`
    absolute 
    w-full 
    border-t 
    border-gray-300
`

export const SocialLoginTitleContainer = tw.div`
    relative 
    -top-3 
    text-center
`

export const SocialLoginTitle = tw.span`
    bg-white 
    px-3 
    text-sm 
    text-gray-500
`

export const LoginButton = tw.button`
    border-orange-400 
    w-full 
    bg-orange-400 
    text-white 
    text-sm 
    py-1.5 
    mt-8 
    rounded-md 
    shadow-md 
    hover:bg-orange-500 cursor-pointer
`;

export const SocialLoginContainer = tw.div`
    mt-10
`;

export const SocialLoginButtonContainer = tw.div`
    grid 
    grid-cols-2 
    gap-2 
    mt-6
`

export const SocialLoginButton = tw.button`
    w-full 
    flex 
    items-center 
    justify-center
    border 
    border-gray-300 
    py-1.5 
    rounded-md 
    shadow-sm 
    text-gray-500 
    cursor-pointer 
    hover:bg-gray-100
`

