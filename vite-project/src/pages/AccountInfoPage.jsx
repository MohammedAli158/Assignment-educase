import { useContext, useState } from "react";
import { UserContext } from "../App";

const AccountInfo = () => {
  const [imgBroken, setImgBroken] = useState(false);
  const {info} = useContext(UserContext)

  return (
    // page bg = gray-100, content aligned to the left (not centered horizontally)
    <div className="min-h-screen bg-gray-100 flex  justify-start p-6">
      {/* container: left-aligned but responsive width */}
      <div className="w-full max-w-sm md:max-w-md lg:max-w-lg">
        {/* Header: the only white-background element */}
        <div className="bg-white border border-gray-200 rounded-t-lg px-4 py-3">
          <h2 className="text-sm font-semibold text-gray-700">Account Settings</h2>
        </div>

        {/* Content: sits on page-gray (so header is the only white part) */}
        <div className="bg-transparent px-4 py-5 border border-t-0 border-b-0 border-gray-200 rounded-b-lg">
          <div className="flex items-start gap-4">
            {/* Avatar area: empty src + graceful placeholder */}
            <div className="relative">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/057/068/323/small/single-fresh-red-strawberry-on-table-green-background-food-fruit-sweet-macro-juicy-plant-image-photo.jpg"
                alt="profile"
                onError={() => setImgBroken(true)}
                className={`h-14 w-14 rounded-full object-cover bg-gray-200 ${imgBroken ? "hidden" : "block"}`}
              />
              {imgBroken && (
                <div className="h-14 w-14 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500 font-semibold">A</span>
                </div>
              )}

              <div className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full bg-purple-600 border-2 border-white flex items-center justify-center text-xs text-white">
               📷
              </div>
            </div>

            {/* Textual info */}
           <div className="flex-1 min-w-0">
  <p className="text-sm font-semibold text-gray-800 truncate">{info[0]}</p>
  <p className="text-xs text-gray-500 mb-2 break-all">{info[1]}</p>
  <p className="text-xs text-gray-600 leading-relaxed">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam nonumy eirmod tempor
    invidunt ut labore et 
  </p>
</div>

          </div>

          {/* dotted divider at bottom */}
          <div className="mt-6 border-t border-dashed border-gray-300" />
        </div>
      </div>
    </div>
  );
};

export default AccountInfo;
