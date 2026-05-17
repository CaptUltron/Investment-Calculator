
export default function Calculator({ onInputChange, inputValues }) {
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label >INITIAL INVESTMENT</label>
                    <input
                        type="number"
                        name="initialInvestment"
                        value={inputValues.initialInvestment}
                        onChange={(event) => onInputChange(event.target.name, event.target.value)} />
                </p>
                <p>
                    <label>ANNUAL INVESTMENT</label>
                    <input
                        type="number"
                        name="annualInvestment"
                        value={inputValues.annualInvestment}
                        onChange={(event) => onInputChange(event.target.name, event.target.value)} />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>EXPECTED RETURN</label>
                    <input type="number"
                        name="expectedReturn"
                        value={inputValues.expectedReturn}
                        onChange={(event) => onInputChange(event.target.name, event.target.value)} />
                </p>
                <p>
                    <label>DURATION</label>
                    <input
                        type="number"
                        name="duration"
                        value={inputValues.duration}
                        onChange={(event) => onInputChange(event.target.name, event.target.value)} />
                </p>
            </div>
        </section>
    );
}