import React, { useState, useEffect } from "react";
const SearchBox = () => {
	const [search, setSearch] = useState("");
	const [suggList, setSuggList] = useState([]);
	const [dataList] = useState([
		"Adolf Hitler",
		"Bob Marley",
		"Christoper Nolan",
		"Christian Bale",
		"Martin Scorsese",
		"Subash Chandra Bose",
		"Robert DeNiro",
		"Leonardo DiCaprio"
	]);

	useEffect(() => {
		const updateSuggList = () => {
			setSuggList(
				dataList.filter((ele) =>
					ele.toLowerCase().includes(search.toLowerCase())
				)
			);
		};
		updateSuggList();
		// return () => {
		// 	setSuggList([]);
		// };
	}, [search, dataList]);

	const styles = {
		div: {
			width: "100vw",
			textAlign: "center",
			justifyContent: "center",
            alignItems: "center",
            margin:'80px 0px'
		},
		inputBox: {
			width: "25%",
            height: "30px",
            margin:'50px 50px 0px 50px'
        },
        suggListTable: {
            position: "absolute",
            left:'37.5%',
            border:'1px solid black',
            width: "25%",
        },
        tableTd: {
            textAlign:'left',
            borderBottom: '1px solid black',
        }
	};

	return (
        <div style={styles.div}>
          <br />
            <input
				style={styles.inputBox}
				onChange={(e) => setSearch(e.target.value)}
			/>
            <table style={styles.suggListTable}>
                {
                    suggList.map(ele => (
                        <tr><td style={styles.tableTd}>{ele}</td></tr>
                    ))
                }
            </table>
		</div>
	);
};

export default SearchBox;
