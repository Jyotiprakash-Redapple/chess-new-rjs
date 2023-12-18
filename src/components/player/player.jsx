import React from "react";
import style from "./player.module.css";

function Player({ name, image }) {
	return (
		<div className={style.player}>
			<div className={style.player_wrapper}>
				<div className={style.inner_wrapper}>
					<div className={style.image_wrapper}>
						<img
							src={image}
							width={20}
							height={20}
							alt="image"
							style={{
								width: "100%",
								height: "100%",
								borderRadius: "5px",
							}}
						/>
					</div>
					<div className={style.name_wrapper}>
						<span
							style={{
								fontWeight: 600,
								color: "#fff",
							}}>
							{name}
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Player;
