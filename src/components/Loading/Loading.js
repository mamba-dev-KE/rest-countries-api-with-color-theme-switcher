import loadingIcon from "../../images/reload-outline.svg";
import "./Loading.css";

const Loading = () => {
	return (
		<>
			<img className="loading-icon" src={loadingIcon} alt="Loading...." />
		</>
	);
};

export default Loading;
