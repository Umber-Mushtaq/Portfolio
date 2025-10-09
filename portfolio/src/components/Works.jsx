import PronouncerPro from "../assets/pronouncer.png";
import Notepad from "../assets/notepad.jpeg";
import BookStore from "../assets/bookstore.jpeg";
import Cinema from "../assets/cinema.jpeg";

const CardData = [
  {
    name: "PronouncerPro Web App",
    image: PronouncerPro,
    description:
      "Web app to improve English pronunciation using React and .NET Core.",
    github: "https://github.com/Umber-Mushtaq/Final_Year_Project",
  },
  {
    name: "Cinema Ticket Booking Desktop App",
    image: Cinema,
    description:
      "Desktop app for movie browsing, ticket booking, and admin management.",
    github: "https://github.com/Umber-Mushtaq/Cinema_Hall_Booking_Winform",
  },
  {
    name: "NotePad Text Editor Desktop App",
    image: Notepad,
    description:
      "WPF text editor with formatting, undo/redo, and zoom controls.",
    github: "https://github.com/Umber-Mushtaq/NotePad_TextEditor_WPF",
  },
  {
    name: "Book Store Mobile App",
    image: BookStore,
    description:
      "Android app for managing books with real-time Firebase database.",
    github: "https://github.com/Umber-Mushtaq/BookStore_Mobile_App",
  },
];

const Works = () => {
  return (
    <section id='projects' className='bg-foregrounddark py-5 px-10'>
      <h1 className='text-white font-bold tracking-wide text-3xl mb-6 mt-10 text-center'>
        Academic <span className='text-button'>Projects</span>
      </h1>
      <p className='text-text text-center'>
        A collection of academic projects demonstrating my skills in full-stack
        development and software design.
      </p>
      <div className='mx-3 grid grid-cols-1 md:grid-cols-4 lg-grid-cols-4 gap-6 p-6'>
        {CardData.map((card) => (
          <div
            className='overflow-hidden rounded-lg text-center md:text-left border-2 border-button hover:animate-floatY'
            key={card.name}
          >
            <img
              src={card.image}
              className='w-full h-48 object-cover'
              alt='img here'
            />
            <div className='p-3 flex-col items-center'>
              <h1 className='text-button py-4 text-bold'>{card.name}</h1>
              <p className='text-text'>{card.description}</p>
              <button
                onClick={() => window.open(card.github, "_blank")}
                className='border-button border-2 text-text rounded-md text-center py-1 px-2 my-3 hover:text-black hover:bg-button transition-colors duration-700'
              >
                Github Link
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works;
