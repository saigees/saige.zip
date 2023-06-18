import Button from "~/components/Button";

export default function ErrorPage() {
  return (
    <div className="m-[5rem] w-fit flex flex-col gap-2">
      <h1 className="text-2xl font-bold">404 not found.</h1>
      <Button href="/">
        <p>Return home?</p>
      </Button>
    </div>
  );
}
