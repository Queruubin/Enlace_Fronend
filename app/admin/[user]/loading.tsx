export default function Loading() {
  return (
    <div className="w-screen h-screen m-auto flex justify-center items-center">
      <div className="w-[400px] h-[80%] flex flex-col justify-center items-center shadow-2xl py-7 bg-white">
        <h2 className="font-bold text-2xl flex-1">Enlace Academico</h2>
        <div className="flex flex-col flex-2 w-full px-10">
          <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
