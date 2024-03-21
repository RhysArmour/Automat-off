import elton from '../assets/elton.jpeg';
import holiday from '../assets/holiday.jpg';

const PageBody = ({ isOnline }: { isOnline: boolean }) => {
  return (
    <article className="page-body">
      {isOnline ? (
        <>
          <h2 className='page-body__heading'>I'm online baby!</h2>
          <img className="page-body__image" src={elton} alt="Elton John - I'm still standing" />
        </>
      ) : (
        <>
          <h2 className='page-body__heading'>We're having a brief vacation - back online soon!</h2>
          <img className="page-body__image" src={holiday} alt="Madonna - Holiday" />
        </>
      )}
    </article>
  );
};

export default PageBody;

