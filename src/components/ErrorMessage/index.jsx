import PropTypes from "prop-types";

export default function ErrorMessage({message}) {
    return (
        <div className="error-message-generic">
            <p>
                {(message.includes('not found in our database') ? "No record found." : message)}
            </p>
        </div>
    )

}

ErrorMessage.propTypes = {
    message: PropTypes.string.isRequired
}