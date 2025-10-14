export default function LoreCard({ children }: any) {
  return (
    <div className="flex items-center justify-center p-4">
      <div
        className="w-full h-[22rem] rounded-xl shadow-xl 
                   hover:shadow-2xl transition-shadow duration-300 
                   transform hover:-translate-y-1 flex flex-col 
                   items-center justify-center p-6 border-2 border-gray-100"
      >
        {children}
      </div>
    </div>
  );
}
