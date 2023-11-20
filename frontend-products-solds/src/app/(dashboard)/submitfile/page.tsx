import { FileInput } from "./components/FileInput"; 

export default function SubmitFilePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <FileInput.Root>
        <FileInput.Input />
        <FileInput.Viewer />
      </FileInput.Root>
    </main>
  );
}
