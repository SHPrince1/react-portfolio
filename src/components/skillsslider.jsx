import React, { Component } from "react";
// https://www.npmjs.com/package/react-plx
import Plx from "react-plx";

// https://www.npmjs.com/package/react-multi-carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { styled } from "styled-components";
import style from "../styles/skillslider.module.css";

const responsive = {
  // superLargeDesktop: {
  //   // the naming can be any, depends on you.
  //   breakpoint: { max: 4000, min: 3000 },
  //   items: 5,
  // },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
  },
};

const SkillsSlider = () => {
 

  return (
    <>
     
        <div className={style.parentDiv}>
          <Carousel
            responsive={responsive}
            infinite={true}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet"]}
            centerMode={true}
            // autoPlay={true}
            autoPlaySpeed={2000}
            shouldResetAutoplay={true}
            rewind={false}
            rewindWithAnimation={true}
            rtl={true}
            // rtr={true}
            minimumTouchDrag={50}
            className={style.carosel}
          >
            <div className={style.skillRow}>
              {" "}
              <img src="data:image/png;base64,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" />
              <h3>JavaScript </h3>{" "}
            </div>
            <div className={style.skillRow}>
              {" "}
              <img src="data:image/png;base64,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" />
              <h3>REACT JS </h3>
            </div>
            <div className={style.skillRow}>
              {" "}
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK6SZehHAF2c-e8_OwLOtRQvODoJ3Gc8pfYg&usqp=CAU" />
              <h3>NEXT JS </h3>
            </div>
            <div className={style.skillRow}>
              {" "}
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK6SZehHAF2c-e8_OwLOtRQvODoJ3Gc8pfYg&usqp=CAU" />
              <h3>WORDPRESS</h3>
            </div>
            {/* <div  className={style.skillRow}><h3>GIT </h3> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrt6vCLers6236MbdsU006EshdZn96F1kf9g&usqp=CAU" /></div> */}

            <div className={style.skillRow}>
              {" "}
              <img src="data:image/png;base64,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" />
              <h3>Computer Engineer</h3>{" "}
            </div>
            <div className={style.skillRow}>
              {" "}
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANsAAADmCAMAAABruQABAAAA0lBMVEX29vZMlEixqKkAAAD5+Pn8/Pz29vX+/v5Jk0X7+vtMlElCjz76+PpFkUFKlEZGkUKCn32tpKVgm10/jjrs8+vl7+T4+/jm5ubv7+/a6Nn6/PnX19cRERGjxKHB17+yzbDAwMDb29tOTk6dnZ1TlE/T49J/rHyIs4WavpjNzc17e3s7OzuOjo5LS0tycnJDQ0Ovr69ZWVlvo2zJ3ceGhoYYGBgxMTFmZma5ubkhISFknWF5qnd8rHmTuZCmpqZ1dXV4nXKUpY6mqqBml2GLo4XU2tL1Gk9XAAATZklEQVR4nO1dCXuazBbWOCMMIHxRwCV1S3Br0sZqm7Xmu+v//0t3ZoAI5gzOKCi9T94+T9sIwXk5Z842W6XyiU984hOf+MQnjkM98ff/Of54kgghjOp1zsP1XArfx4QQC1nnbtrhQIigSqd9tViMnpYXFxeXl5d/mY5jGEFz9TrrD9ddl5K00LnbqQgqq0p7vBhxQpeXFzH+alRt29Z13WmYZsusNleb4cT1CflDCFJenfHi6SLJKcEtCcqScjReNgOPShCVvP8xXqMlwArkFjOkBIPZwOuR8vZAhNqLJyEvITcO3THNl/7ELyU9Ruwik1gWN4PLzzSbc0qvXJ2PquJCrIkycovFR+n1PUzOTegdqDLOVkV5bpye8zooifBwh+qiDDFJblQ5nVbQ987PDrVH0sxkuYXCm3XxWdnh9khOGVW5UeE1nOnkfOwIZaZATI0bY2dOzyQ73FFlpsqtWm2Yv7unt5nU6CszU+TG4Tgb77TsUP1KwYIcw41qpjH0Txis4PbyEGYHcaMwm+tTdTtUUe9oR3GjHmHjnkR0aHyQOh7DjSpmMMDFMztcaAdzs+kfvTVzC7YppH240EBuhjTDRrDmoqsXk8Fafv9fh5G6DPFXy2RoNByduS816K25X5hJsbxV6x/KnC4unp4Wi6ur8bjd/u96vR4M+/PZ60vgMI7SBLl8zZVXkEnB68Cp6v9UofW0uGp3WAWFg/ZWC1kUhPR815sMN6uAEtTlRRfrZY5gGo56/RZthR38S47YcjHuVAhCwt6BkEWw3x3Omg7lZ8v1PN3s93LXS8ufmVyB9H8v9xK7GI07XE4Sz7UI5fc7MCXV027N8o5SkLcyo6c7f+0j1q6ohRGIYHc9C0xHip25cnOt9pFukPhicZfjxOQEtgOLuIPfjrm37xnUjzc9Kw9u4TPIxEh8qbDLXS6vOodXAhDCXr8pIzzdmOTixhk5MtBT71P/N2g9Ru2DJJakR/zBqwQ73cjLXOKBs9PPnf8AzDo5fF29YvUmU2f3+z4opu4McpEcGZi7X2UbO1pJmeUW7Fm4OzX3xJ2GbuZBDqBWtfXmcpdZjpbLwpPXVqZVoRbFPD4xgKhRNLax1+VTO3dvinrrF/a9Gbppc8kd80bJGqJGQwjnn7HVvzrWgoBA/tDINiq2sz5KLcnEEehG5AioOhYVmhNvmq2YunOMK0BdQ/h0FntdXrQLzBcRHgSZNkWvHl7gQ16Q8eJo7DWqF1uisbwp2NvfyQUea8ABnQ65L1mvreH8t/DCIeoNRZ0ifL8v7mHWpDc1Mx5rNk9S8SXdZmYrpr1DnornGQ+1zdlpqmpUe2YtkV5Se92aH+DmBI4tptY/2SAEwv3MlqgGKPVME1nNK5yTBB5UxW2xja7qW/abYs/pBPnkGNIgE2awBUUHvemrPQ1vxJ3NySk3lAbNDroZr9rcKHU52tmEj2q8uKcf78v0R0pdzspw2o3VGahlk4tcuBx6r8LnUGrnmbkjJmdXG6/SXo4MTVHPpQp5rklJWZJrDSW1EnmGbcPUnObZqFXqyBUaFNuQ1Eo8FT1CSbHzR0bs3phimZiZDFoiasYZJg2kmtYVOnFzIKNQrujl2OZxiW4OgMsAvHGBhPkm85bAkEh32ALBzRwsuP1Bs9UVFQcV3X9BwDMBOdvZG1fi3wJD21gphm0FwX0RWLrG7z3vHq0Fr0WXtbJFQ5ygmOtsc9JbCcSWSx03FwhjXT1bsyxYbEbVnPXEI6AnRm8meP+tTMH5L7C8ncAv0eR9kZfSXzIEJ3Lbtjkp09R2ql1wTJhRRq+LxFYO87+FKHPOEJzISOqhzy+NUtKoWaCVYlPZW8GuQy5WOyVEttJZCRQMdQW/8FoujWQQZc/mBPbCWGBbTeUiWeGooy5s9Roz0A0jDx7Ka1BDUpquFqEuFIQDhk+kD6qkdEp7WrDiAKhkfUhwfhO0PY15WYKtNAg8XAFWYgUOoDQx8i6QCwrOhtwAgRXYLKnYmODABjdmH626C6YOtnOWSqsMkAdm0bbh7kb1Am/Y2JRVbLTJG1jTPpQ+MOwMzW7ZQpItLDjW0D+EGi4oYBaSlM23bYFXUKNpN0rfJlBJmjSUl1rFEjR6RynxDAqT9aAc9R8RfDAd4DXmBOCkQaLmd1bA/ptayuRNAsfNouQS66QoczHXSb8F+8HM+kMpABcK0mFibwWqJBh3lgh1uISekglyIUtilzBx2wFVStALJGJgaw1leuVXybpAKZNFENjelDdM3gJOOp2EfRd0N0HtoUxAE7DDrbZj+24AaW3gZjy0FKgz9w01fevhLJC8s2/MpwSoV8hvyAxuVc4CLak5tErtuEPsazucCP0J3U2U6GzTTgyZkp2orLQAyyZbYwL2x6StKTNAG6/HdhAuPDQOGLtBmEGgykRwDZGjFk8IOlQUmYA+wmDdUQlII+Plzd3N8gppHxqLtM6IXntbVNLX6OeL0aKtpaIEpZABgcakFQ0YwiOKqqZEa3+txfh7rO1cvHqMr31tJ67hdvj57Sjxobakn0iv8YG9dysangfjFltXq7lqN7Ukfqb0DN8lr92888BXwIeoTX9823k5GdzA4rnZj+QGaaxiOUH7u5bGt8Q6Hfw9fe1n1HDUSXw4ijVRo3ffK7xX0BLG4znkFXDteyY07FKLBfPr9iH637Z52s/o2vX1l5SQGIval0VnfE3/fY5MF1nQH64UulzvFTCU8ZghhvIEByg9C8HbQ/F9rGlaZRTS+zuSDh7xH59H9Bp+CtldMeJc+Wq0p5FKQnD4eStYKYCjVfpL2HxQqEoJDr7mLX4LbSCuhD8uIrV4Zj88hMtRtXGosewH/BaLS/v6/i6YBnxRYCaoh9hRlwI9u4oLQGGDv8ZvG3W4dK45G7wMiUZqoL2FP6JIJR+1+J5bHD/qScmzghFlHFWBBQWVOU44bO/WbEdGc8w+0G45z3ctC+3Hd/qz9iN+IYSp7S9+N/3sh4pGiiqwjseuwYWwdB0sG1ylarfbJqHQtt/gd5ku30XBGdVq7H/Xsc3k3Jgm4qeagmuLvgysP4a1HjiSVhnk4MoValf0dSEhJix8syPT6ANqObTHWG6c0gO9hSnzjZrYRO3noQfs2FVqXLyRCbWroNBufnm/9gXvXrvTQt/Af4vzpd2TKcCDahgr0LuQGyhTeLxfwC2Mtra/EAcpVFqIO4T7BG9u+Vmn4ppY4/czPb3D3JUsVAtQcKjfirgB4aTSeGlkSxLK9FyLreHWdLyDf/LAKHzhv0W0q9DysPfwXVEjD+Om8PSwe9WiCBlpcYw1IrvuoRI6Z6qlnbjr3S3evvDuyqVNQzWkUboKSwfBocPWOh9uFfwt7F809MCa1v5R23ILLWYy0NBCoVJuFXIf30m5knZoT7XF19uH+7u2dL8rllscc9Vuf9795EHJfczt3XJA3FDnNvrF5zZhne6bhkgs9KWsdh7ATcXL7GQ4VIJiuW11ku3HcsNszcMdTdmZHxgT9O39IZLOAClzayimb6kMrbYIxXWFgP7GLUjtOWaK2uM2Yvr3i72C0OT++MnluZBqQqYtgf2b4nQgbfS8ldpCi6OwyOInrV9oObdRTLghFHN2zxUyDrVR4+ZILvjK9G8C361YLsFo+RiGyG8VHKZsLEIMmXyD/FuqgUx3R+HvsUvhXVLRVya3jGtq7DTUaXcqGo6DRtZIzK3Kr0Rc8rEHVsLbaNDGA+s3ngA91BK5eCa3jLgKeXCsfNCkmfiFhMYAv8csWwmQJ/7BU6rZXIfZPe/djL+dGxk/AOcBZrhzHmhnlEt4SUSpNsuuo/Rtm5JFFYaUunENpGYx1ESelPMOdyfFDczfIh8GjlDFhSJpoEQkwbOX2i0XTdjhtklC6ALuUyrJAmqWmia5PUpzA8t0UWEZnBSqVlZGWmVxF6fWsdjewirC95SctFAll8mn8/t5+Ye/CB4ta/eyOonBMl00RRQc6nCmCtzQgpnIX9EOXbj9K7aSlfdg8zGqpbTDYlD6959jD6g9vL+TmqwtwXCZLmoLtHZWaZeCMFupPVxpmMaTi9DTjeIKSVi6/N6hXiu+lhIbL/+E5UxueXhKy5/YkflyUO3iMh1cKFIaotKikviPu5u7KGjarQzRNv/9GBUvH5O9LVn+CR3EG423H2qy+Q5cyorKdIKhR5XJJagTl1xjPCbKyouda9/S7+U64clDl/Fw/dGWCr8ads+RmRcUU5QWqqDOdar5X1PDAWlyPyqpizsjG9tYeSHV45l7+7ioqhWVsgTM1ZwAIm/b1qeGZVj7O9sRgV/L9CgVM/uJFAhVopGF2ys5Y0b64PhbrHWgxioZSgat8vTzx/3t/ePNlbZr35DWfvtOr/34OULpx6Kr5XKZfs745utX6lAkuwSGJipsrUUPsjQHzAslNO2mhhJsFcL82gfWfKz1w60KJQVwfqjejAe04UmvqlnOeQB3KOd9yREYtVBj8idwo6bE+GhKtsYCNpRlXhqwBbwchVX8w7kzyNOhSRiq+yedBWBUkhzQhm8wi9o8PEfAgwFJsRDYmJRg34t9gGOq5KCv4I4SrjPdBZgEpKQCG1K2IumMzZaBYBFcKhaGF0iUb+3zLsBpP0Y67IC9N1v8Ue4ZlGDAtTPHAp5nX3qlhFXSSI/Vw3Vn9flqJ4Y1hGai2TvjovBMc120hL8kgFcH7M78hOarUUk63dLsyAJAtNRoZ6mNYH1juWNK0YLT3aEMMIdj1qTEPc4FN2hhuVta2QQ7DpQ57hI1+cPqL3hFUqlXZdKAAxActPqLVZeBW8srOAve3Aiy7YKd5sqbxQn2tmgBPlkQdpZo07E0BGKDYylwPIQGniUVnGhLEnD8CR5bPXKUsTAQMNwSjmX34N259DKug0PggCibpwyvtBHtqla+tZl14Sb5LTDlrNcFGarMrpWnBhLsACp2x6INR8uyreYWvmh7LrE3Fm7FNsz1bJ+jIRJC1hJZDEdo8YZ4ZYF4O7wMy2DBv2Ts30v1pMBTWCOzRSAIrcux/3AMkWvbt/+DwG2UaZsu0Y5qe3uOcG9mpzS20hdut7tHt5AgTCvP3qHCo232B76C/YX4aykDOfHRNhIJCxaJnIYnZ/Zy9awtyRsSa7YFxYUqPz3gzBkBOx5BtEm+IzNRV3xWE429zmssEbMj8IkUkltSCQ8QqDam5zWW4tO/ZCMnwcbf/O2c1VjijSk6UFl6CrJwj/4Dj+3KBSxnEx22UTWlV/4KwsrwKf1zkcN9wVlptlIsL9RKw7DPRS7jpDRwH1Txg4RHbVFyZ1HL3lx4wp2qFfBFJ0dQtDantZb1OjX+G/H5dqr7iIkKEuF7muZ99Pm+1vhi62aol3NoQpBB7rQHbiF3JaR20IhF1ul21UbTO12uSrpZR7ge5HKFeRKD7gxOdZgkHjiihhiH1uCyT6XVzTnrdIXmBXUW+PtZ+sPj90PaQLqC5J3DNleFpwX1CvFWWafuHn76V+YRp1QdggEulh3CAyPr2F/1w023EFaUordW8OG0lpt9VLJ9VPVNVIyNH05F1yvKpFi9PUdcHxsh9TJ7MhPdtCBvgLuvLcHJiDG1zZE7v/XEEUEIR+8XEKUQv+9kHylfbc2O3tQui5wRvr9g4OcrO+IPg8yeVmUpG3NsR/qgjFgugm6+hOzy8XbEX7+YWSeSR9Ry6OhZgWqC3dq3UCUH5SS9wX5mVCFzyEXq7GD3jARjy645dI/WTETcQbO1l9nxZmQLnJEYJtgFc693jOQs7M2D/TJjxj9Hz4OHglPJdtg5rwM3GatIdMD4FiayqSPDzM65ek+D8f3fyqq7rWC29jFR3IbKwv56E7QadhU+W2kLg6cg+cboZBLs8TfhNxt2wwxmAw8TS44fQgS7g1lgNjirvbqf+6Hv9TAil+DGoDum89Jfexhnb3fKaPXcdX9lmJnBVRI0+yggDrKy6jG7sHWT8tsMJx5VUEJQUogIIYt+hn1vMty8GKYJreKC3xw1kAUNSeChA83GFPNrmGa1uZr1B+uu57muz+F6Xnc97G9WzappNuR5VZlCFDcGSLpNedFF0J2G2aJCdIwghOGYJv2k4cjSen9XZrPIc6iZXsrYyy3e5WxT6Dr7W/XtRNCpPhabCuM9SZWAWVV0SL00WJZfKDMK4k33B0W5Q28VlSemgDQl0eUBlkZ93I+6EFjuxpRw5LnBMTfHh+GyQGSyUrQph0M3V5OC62k77HqDvZlxLuBZ/amnR1hu3yicnW0a/TOsCKrTpGReLDu7Ycy9My0LRcSbVwvrd1RmG08xWcqZXV8mU1aGQbP4/jmZsaSZauawaWYMsh4CmgM2h+6pBsGyYPnraZ6qqZvGdJ1zxfNwWNjrv9B8JQ9iVGR976T+bB8Q8SebQD4dExILNl3/rN0MBKM3bzqH9j2bpnXN+aSExDgQpdcdvhqmKj/Gy3gdllFiCVB6xJ30GT9Tl1BQm6XllFd/4rLCX5kWj8BABPvdwXwVUHE0GizZBjjpeoOycoLVfND19xTESgZkYVbIGsxnqybjuAMnaK5mc14Gw5KFzJKBFetwz3ddb7IeDAZDBvrvusuKXhiTP0paMOqIlSQtYjHQv1m18o8nxfHRPtTLbzI+8YlC8D8zMp8XCmI+hQAAAABJRU5ErkJggg==" />
              <h3>Networking </h3>
            </div>
          </Carousel>
        </div>
     
    </>
  );
};

export default SkillsSlider;
