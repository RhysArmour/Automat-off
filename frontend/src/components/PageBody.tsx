import elton from '../assets/elton.jpeg';
import holiday from '../assets/holiday.jpg';

const PageBody = ({ isOnline }: { isOnline: boolean }) => {
  return (
    <article className="page-body">
      {isOnline ? (
        <>
          <p>I'm online!</p>
          <img className="page-body__image" src={elton} alt="Elton John - I'm still standing" />
        </>
      ) : (
        <>
          <p>We're having a brief vacation - back online soon!</p>
          <img className="page-body__image" src={holiday} alt="Madonna - Holiday" />
        </>
      )}
    </article>
  );
};

export default PageBody;

