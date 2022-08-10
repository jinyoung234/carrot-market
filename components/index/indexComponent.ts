import tw from "tailwind-styled-components";

export const Container = tw.div`
    flex 
    flex-col 
    space-y-2
`;

export const ItemsContainer = tw.div`
    p-4 
    flex 
    justify-between 
    border-b
    border-gray-200
`;

export const ItemContainer = tw.div`
    flex 
    items-center 
    space-x-4
`;

export const Img = tw.div`
    h-20 
    w-20 
    bg-gray-400 
    rounded-md
`;

export const FontContainer = tw.div`
    flex 
    flex-col
`;

export const ClickContainer = tw.div`
    flex 
    items-end 
    space-x-1.5
`;

export const EmojiContainer = tw.div`
    flex 
    justify-center 
    items-center 
    space-x-0.5
`;

export const SellItemButton = tw.button`
    fixed 
    bottom-[40px] 
    right-[22px] 
    bg-orange-400 
    text-white 
    rounded-full 
    p-2 
    shadow-md 
    hover:bg-orange-500 
    cursor-pointer
`