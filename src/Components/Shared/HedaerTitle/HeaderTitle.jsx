import {PropTypes} from "prop-types"

const HeaderTitle = ({title }) => {
    return (
        <div className="py-10">
            <h1 className="text-2xl font-bold">Overview </h1>
            <h3 className="text-sm ">{title}</h3>
        </div>
    );
};
HeaderTitle.propTypes = {
    title: PropTypes.string
}

export default HeaderTitle;