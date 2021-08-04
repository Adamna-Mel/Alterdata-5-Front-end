import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

function BasicPagination({ setSize, setPage, conts }) {
	const [cont, setConts] = useState();

	useEffect(() => {
		conts === undefined ? setConts(10) : setConts(conts);
	}, []);

	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Pagination
				className={classes.pagination}
				count={cont}
				color="primary"
				onChange={(e, value) => setPage(value - 1)}
			/>
		</div>
	);
}

export default BasicPagination;

const useStyles = makeStyles((theme) => ({
	root: {
		"& > *": {
			marginTop: theme.spacing(2),
		},
	},
	pagination: {
		display: "flex",
		justifyContent: "center",
	},
}));
