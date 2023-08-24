import "./pricingToggle.scss";

const PricingToggle = ({ onChange }) => {
  return (
    <div className="toggle-container">
      <label className="switch btn-color-mode-switch">
        <input
          value="1"
          id="color_mode"
          name="color_mode"
          type="checkbox"
          onChange={onChange}
        />
        <label
          className="btn-color-mode-switch-inner"
          data-off="월간"
          data-on="연간"
          htmlFor="color_mode"
        ></label>
      </label>
    </div>
  );
};

export default PricingToggle;
