import Container from "@/app/_components/container";

export function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold">
              <span className="text-blue-400">🎉</span> Celebrate with Fireworks! <span className="text-blue-400">🎆</span>
            </h3>
          </div>
          <div>
            <p className="text-sm">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
