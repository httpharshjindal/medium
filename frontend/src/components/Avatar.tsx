function Avatar({ username }: { username: string}) {
  return (
    <div
      className={`rounded-full h-8 w-8 border border-zinc-300 bg-zinc-200 flex justify-center items-center overflow-hidden`}
    >
      {username?username.slice(0, 1).toUpperCase():"A"}
    </div>
  );
}

export default Avatar;
