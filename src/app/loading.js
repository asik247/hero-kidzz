import { FaBoxOpen } from "react-icons/fa";

const Loading = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="text-center space-y-5">
        {/* Animated Icon */}
        <div className="flex justify-center">
          <FaBoxOpen className="text-6xl text-primary animate-bounce" />
        </div>

        {/* Loading Text */}
        <h2 className="text-2xl font-bold">Loading Products...</h2>

        {/* Animated Dots */}
        <div className="flex justify-center gap-2">
          <span className="w-3 h-3 bg-primary rounded-full animate-bounce"></span>
          <span
            className="w-3 h-3 bg-primary rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></span>
          <span
            className="w-3 h-3 bg-primary rounded-full animate-bounce"
            style={{ animationDelay: "0.4s" }}
          ></span>
        </div>

        <p className="text-base-content/60">
          Please wait while we fetch the latest products...
        </p>
      </div>
    </div>
  );
};

export default Loading;