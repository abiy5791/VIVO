function TagButtonComponent({ TagName }) {
  return (
    <div className="text-center text-slate-400 p-2 px-5 rounded-2xl bg-gray-100 mt-3">
      <h1 className="font-medium text-sm">{TagName}</h1>
    </div>
  );
}
export default TagButtonComponent;
