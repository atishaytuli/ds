interface TestimonialCardProps {
    text: string;
  }
  
  const TestimonialCard = ({ text }: TestimonialCardProps) => {
    return (
      <div className="bg-violet-500/50 p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg cursor-pointer aspect-square flex items-center justify-center w-64 h-56">
        <h3 className="text-2xl md:text-3xl font-light text-white font-[LO]">{text}</h3>
      </div>
    );
  };
  
  export default TestimonialCard;