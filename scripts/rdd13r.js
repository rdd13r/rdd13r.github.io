const redirect_target = "https://rdd13r.github.io/rdd13r/";
const defaultRedirectMessage = "Click anywhere to go to Pages";

let redirect_count_down = 11;
let redirect_agent_id;
let clickActionTrapped = false;

const countdownMessage = $("#dvCountDown");
const countdownTicker = $("#lblCount");
const bootstrapRedirectCountdown = () => {

    redirect_agent_id = setInterval(function () {
        switch (redirect_count_down) {
            case -1:
                countdownMessage.hide();
                clearInterval(redirect_agent_id);
                document.location.href = redirect_target;
                break;
            default:
                countdownTicker.html(redirect_count_down);
                redirect_count_down--;
                if (redirect_count_down < 9) countdownMessage.show();
                break;
        }
    }, 1000);
};

const stopRedirectCountdown = () => {
    clearInterval(redirect_agent_id);
    clickActionTrapped = true;
    setTimeout(() => countdownMessage.last().html(defaultRedirectMessage), 1000);
};

const trapClickAction = () => {
    if (clickActionTrapped) {
        window.location.href = redirect_target;
    } else stopRedirectCountdown();
};