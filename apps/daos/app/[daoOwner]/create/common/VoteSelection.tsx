import {DatePicker, Form, Button} from "antd";
import moment from "moment/moment";
export function VoteSelection( { useCustomTime, setPresetEndTime, setUseCustomTime } : any ) {
	
	function onPresetTimeChange( value: string ) {
		if (value === "custom") setUseCustomTime(!useCustomTime);
		else {
			let voteEnd;
			const voteEndTimeAddition = value.split(" ");
			voteEnd = moment().add( ...voteEndTimeAddition );
			setPresetEndTime(voteEnd);
			setUseCustomTime(false);
		}
	}

	return (
		<div className={"flex flex-col mb-5"}>
			<p className={"mb-5"}>How long is your proposal live?</p>
			<div className={"flex flex-row justify-between"} >
				<Button onClick={ () => onPresetTimeChange("1 day") } > One Day </Button>
				<Button onClick={ () => onPresetTimeChange("1 week") } > One Week </Button>
				<Button onClick={ () => onPresetTimeChange("1 month") }> One Month </Button>
				<Button onClick={ () => onPresetTimeChange("custom") } > Custom </Button>
			</div>
			{ useCustomTime && (
				<div className={"flex flex-row"}>
					<Form.Item name="custom_vote_start">
						<DatePicker
							showTime
							className={"new-proposal-custom-time"}
							placeholder={"Vote Start"}
							format={"YYYY-MM-DD-HH:mm"} />
					</Form.Item>
					<Form.Item name="custom_vote_end">
						<DatePicker
							showTime
							className={"new-proposal-custom-time"}
							placeholder={"Vote End"}
							format={"YYYY-MM-DD-HH:mm"} />
					</Form.Item>
				</div> )
			}
		</div>
	);
}

