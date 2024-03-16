export default function NotFound() {
  return (
    <div className="h-full bg-blue-100 flex justify-center items-center flex-col gap-4 py-20 px-4 text-center">
      <h2 className="font-bold text-3xl">
        The Page You Requested Could Not Be Found
      </h2>
      <p>
        Please check the URL and if you still experience error, please email our
        developer at {' '}
        <a
          href="mailto:webdevelopmenthamilton@gmail.com"
          className="text-blue-500 hover:text-blue-700"
        >
          webdevelopmenthamilton@gmail.com
        </a>
      </p>
      <p>Error Code: 404 (Page Not Found)</p>
      <a
        href="/"
        className="bg-blue-300 px-2 py-1 rounded-lg hover:bg-blue-400 duration-300"
      >
        Return Home
      </a>
    </div>
  );
}
