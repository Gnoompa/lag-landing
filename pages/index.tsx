import { Button, Flex, Heading, Image, Link, Text } from "rebass";

export default function Home() {
  return (
    <Flex flexDirection={"column"} style={{ gap: "10rem" }}>
      <div
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          backgroundImage: "url('/sand.svg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          zIndex: -1,
        }}
      />
      <Image
        display={["none", "block"]}
        src="/lagui.png"
        style={{
          position: "absolute",
          width: "25vw",
          top: "10%",
          left: "5%",
        }}
      ></Image>

      <Image
        display={["none", "block"]}
        src="/lagui.png"
        style={{
          position: "absolute",
          width: "25vw",
          top: "10%",
          right: "5%",
          transform: "rotateY(180deg)",
        }}
      ></Image>
      <Flex
        mt={"10rem"}
        width={"100%"}
        flexDirection={"column"}
        style={{ gap: "4rem" }}
        alignItems={"center"}
      >
        <Flex flexDirection={"column"} style={{ gap: "2rem" }} alignItems={"center"}>
          <Heading>
            <Image src="/title.svg" width="30rem" maxWidth={"90vw"} />
          </Heading>
          <Text width={"29rem"} maxWidth={"90vw"} textAlign={"center"} fontSize={"1.25rem"}>
            Tap, Earn, Dominate with LAG Clicker, on-chain game taking over 0xMantle in April 2024.
          </Text>
        </Flex>
        <Button className="primary">PLAY</Button>
      </Flex>
      <Flex
        flexDirection={"column"}
        backgroundColor={"#FFFFE6"}
        p={["1rem", "10rem"]}
        style={{ gap: "2rem", border: "2px solid #111" }}
      >
        <Heading
          as={"h2"}
          color="#6EFEC2"
          fontSize={"5rem"}
          style={{
            textShadow:
              "2px 0 #111, -2px 0 #111, 0 2px #111, 0 -2px #111, 1px 1px #111, -1px -1px #111, 1px -1px #111, -1px 1px #111",
          }}
        >
          About
        </Heading>
        <Flex style={{ gap: "10rem" }} flexDirection={["column", "row"]}>
          <Text width={"50rem"} maxWidth={"90vw"} fontSize={"1.5rem"}>
            LAG Clicker is a competitive on-chain game set to launch on the 0xMantle network in
            April 2024. Players tap on worms or harvsters each round to earn $LAG.
          </Text>
          <Image src="/baron.png"></Image>
        </Flex>
      </Flex>
      <Flex
        flexDirection={"column"}
        style={{ gap: "4rem", position: "relative" }}
        alignItems={"center"}
      >
        <img
          src="/spiced.png"
          style={{
            position: "absolute",
            width: "40vw",
            top: "3rem",
          }}
        ></img>
        <Image src="/howto.svg" width={"20rem"}></Image>
        <Flex style={{ gap: "2rem" }} mt={"10rem"} flexDirection={["column", "row"]}>
          <Flex
            flexDirection={"column"}
            alignItems={"center"}
            backgroundColor={"#FFFFE6"}
            p={"2rem"}
            className="bordered"
            style={{ gap: "2rem" }}
          >
            <Image src="/lag.png" height={"15rem"}></Image>
            <Text
              color="#6EFEC2"
              fontSize={"3rem"}
              style={{
                textShadow:
                  "2px 0 #111, -2px 0 #111, 0 2px #111, 0 -2px #111, 1px 1px #111, -1px -1px #111, 1px -1px #111, -1px 1px #111",
              }}
            >
              Slay opponents
            </Text>
          </Flex>
          <Flex
            flexDirection={"column"}
            alignItems={"center"}
            backgroundColor={"#FFFFE6"}
            p={"2rem"}
            className="bordered"
            style={{ gap: "2rem" }}
          >
            <Image src="/mnt.svg" height={"15rem"}></Image>
            <Text
              color="#6EFEC2"
              fontSize={"3rem"}
              style={{
                textShadow:
                  "2px 0 #111, -2px 0 #111, 0 2px #111, 0 -2px #111, 1px 1px #111, -1px -1px #111, 1px -1px #111, -1px 1px #111",
              }}
            >
              Stake $MNT
            </Text>
          </Flex>
          <Flex
            flexDirection={"column"}
            alignItems={"center"}
            backgroundColor={"#FFFFE6"}
            p={"2rem"}
            className="bordered"
            style={{ gap: "2rem" }}
          >
            <Image src="/austin.png" height={"15rem"}></Image>
            <Text
              color="#6EFEC2"
              fontSize={"3rem"}
              style={{
                textShadow:
                  "2px 0 #111, -2px 0 #111, 0 2px #111, 0 -2px #111, 1px 1px #111, -1px -1px #111, 1px -1px #111, -1px 1px #111",
              }}
            >
              Become OG
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        flexDirection={"column"}
        backgroundColor={"#FFFFE6"}
        p={["1rem", "10rem"]}
        style={{ gap: "2rem", border: "2px solid #111" }}
      >
        <Heading
          as={"h2"}
          color="#6EFEC2"
          fontSize={["3rem", "5rem"]}
          style={{
            textShadow:
              "2px 0 #111, -2px 0 #111, 0 2px #111, 0 -2px #111, 1px 1px #111, -1px -1px #111, 1px -1px #111, -1px 1px #111",
          }}
        >
          $LAGonomics
        </Heading>
        <Flex flexDirection={"column"}>
          <Text fontWeight={"bold"}>Community Airdrops</Text>
          <ul>
            <li>20% Airdrop 1: Allocated to MNT stakers, genesis NFT holders and players.</li>
            <li>30% Reserved for future airdrops</li>
          </ul>
          <Text fontWeight={"bold"}>Liquidity</Text>
          <ul>
            <li>15% for token liquidity </li>
          </ul>
          <Text fontWeight={"bold"}>Ecosystem</Text>
          <ul>
            <li>20% Ecosystem to expand and develop the LAG.</li>
            <li>15% Team, investors and early contributors.</li>
          </ul>
        </Flex>
        <hr color="#111" style={{ width: "100%" }} />
        <Flex style={{ gap: "1rem" }} justifyContent={"flex-end"}>
          <Link href="/" target="_blank">
            <img src="/x.svg"></img>
          </Link>
          <Link href="/" target="_blank">
            <img src="/discord.svg"></img>
          </Link>
          <Link href="/" target="_blank">
            <img src="/warpcast.svg"></img>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}
