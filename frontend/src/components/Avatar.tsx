function Avatar({ username }: { username: string}) {
  return (
    <div
      className={`rounded-full h-10 w-10 border border-zinc-300 bg-zinc-200 flex justify-center items-center overflow-hidden`}
    >
      {username?username.slice(0, 1).toUpperCase():"A"}
    </div>
  );
}

export default Avatar;
