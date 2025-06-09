
import { Heart } from "lucide-react";

export const Watermark = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 py-6 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm text-gray-600 flex items-center justify-center">
            Made with <Heart className="h-4 w-4 mx-1 text-red-500 fill-current" /> and{" "}
            <span className="font-semibold text-blue-600 mx-1">Lovable</span> for{" "}
            <span className="font-semibold text-purple-600 mx-1">Freshers of 2025</span> by{" "}
            <span className="font-bold text-gray-900 ml-1">ABHINAV MISHRA</span>
          </p>
        </div>
      </div>
    </div>
  );
};
