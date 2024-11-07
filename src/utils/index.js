import { LocaleConsumer } from "../contexts/LocaleContext";

const showFormattedDate = (date) => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return (
    <LocaleConsumer>
      {
        ({ locale }) => {
          return ( locale === 'id' ? new Date(date).toLocaleDateString('id-ID', options) : new Date(date).toLocaleDateString('en-ID', options))
        }
      } 
    </LocaleConsumer>
  )
};

export { showFormattedDate };
