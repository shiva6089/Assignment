import React from 'react'

export default function Form({ selectedDrug }) {
    console.log("selectedDrug", selectedDrug)

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            height: "75vh",
            width: "100vw"
        }}>
            <div style={{ border: "1px solid", width: "40vw", height: "60vh" }}>
                {selectedDrug && selectedDrug?.fields?.map((item) => {
                    return (
                        <div key={item.key}>
                            {item.type === "dropdown" ? (
                                <div key={item.key}>
                                    <label htmlFor="">{item.label}  {item?.unit && `(in ${(item?.unit)})`}</label> <br />
                                    <select name="cars" id="cars">
                                        {item.items.map((dropdownItem) =>
                                            <option value={dropdownItem.value}>{dropdownItem.text}</option>
                                        )}

                                    </select>
                                    <br />
                                    <br />
                                </div>
                            ) : (
                                <>
                                    <label htmlFor="">{item.label}  {item?.unit && `(in ${(item?.unit)})`}</label> <br />
                                    <input type={item.type} />
                                    <br />
                                    <br />
                                </>
                            )}
                        </div>
                    )
                })}
                {selectedDrug?.fields.length === 0 && <p>Please select a drug item</p>}
            </div>
        </div>
    )
}
