import { connect } from 'react-redux';
import Heading from './Heading';

const mapStateToProps = state => ({
    day: state.headingSection.date.day,
    month: state.headingSection.date.month,
    year: state.headingSection.date.year,
    date: state.headingSection.date.date,
});

const HeadingContainer = connect(mapStateToProps)(Heading);

export default HeadingContainer;