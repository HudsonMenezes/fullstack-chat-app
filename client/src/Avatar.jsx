export default function Avatar({ userId, username }) {
  const colors = [
    "bg-red-200",
    "bg-green-200",
    "bg-purple-200",
    "bg-blue-200",
    "bg-yellow-200",
    "bg-teal-200",
    "bg-amber-200",
    "bg-indigo-200",
    "bg-pink-200",
    "bg-brown-200",
    "bg-grey-200",
    "bg-black-200",
    "bg-orange-200",
  ];

  const userIdBase10 = parseInt(userId, 16);
  const colorIndex = userIdBase10 % colors.length;
  const color = colors[colorIndex];

  return (
    <div className={"rounded-full w-8 h-8 flex items-center " + color}>
      <div className="w-full text-center opacity-70">{username[0]}</div>
    </div>
  );
}
