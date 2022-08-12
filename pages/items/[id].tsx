import { NextPage } from "next";

const ItemDetail : NextPage = () => {
    return (
        <div className="p-5">
      <div>
        <div className="w-full h-60 bg-gray-400"/>
        <div className="py-4 flex items-center space-x-3 border-b border-gray-300">
          <div className="w-10 h-10 rounded-full bg-gray-400"/>
          <div>
            <p className="text-[14px]">Steve Jebs</p>
            <p className="text-xs text-gray-500">View profile &rarr;</p>
          </div>
        </div>
        <div>
          <h1 className="pt-6 pb-1 font-semibold text-2xl">Galaxy S50</h1>
          <p className="text-xl pb-6 pt-1">$140</p>
          <p>
            My money&apos;s in that office, right? If she start giving me some
            bullshit about it ain&apos;t there, and we got to go someplace else
            and get it, I&apos;m gonna shoot you in the head then and there.
            Then I&apos;m gonna shoot that bitch in the kneecaps, find out where
            my goddamn money is. She gonna tell me too. Hey, look at me when
            I&apos;m talking to you, motherfucker. You listen: we go in there,
            and that ni**a Winston or anybody else is in there, you the first
            motherfucker to get shot. You understand?
          </p>
          <div className="flex space-x-2 my-6">
            <button className="w-full bg-orange-400 py-2.5 text-white rounded-md cursor-pointer hover:bg-orange-500 shadow-md">Talk to seller</button>
            <button className="text-red-600">
              <svg
                className="h-6 w-6 "
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4">Similar items</h2>
        <div className="grid gap-2 grid-cols-2">
          {[1, 2, 3, 4, 5, 6].map((_, i) => (
            <div
                key={i}
            >
                <div className="w-full h-44 bg-gray-400"/>
                <h3 className="pt-3">Galaxy S60</h3>
                <p className="text-sm font-semibold pb-1">$6</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    );
}

export default ItemDetail;