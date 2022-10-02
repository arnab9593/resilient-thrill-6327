import { Box, Divider, Heading, Image, Input, Select, Spacer, Stack, Text } from "@chakra-ui/react"

const Sidebar = () => {
    return (
        <div>

            <Box border='1px solid white' width='310px' ml='20' marginTop="90px" padding="20px">
                <Box mt='5'>
                    <Box gap='1'>
                        <Heading>Price</Heading>
                        <Box display="flex">
                            <Input type='checkbox' w="3" h="7" border='2px solid Black' />
                            <Text ml="20px" fontSize="20px">1 - 499.00</Text>
                        </Box>
                        <Box display="flex">
                            <Input type='checkbox' w="3" h="7" border='2px solid Black' />
                            <Text ml="20px" fontSize="20px">500.00 - 999.00</Text>
                        </Box>
                        <Box display="flex">
                            <Input type='checkbox' w="3" h="7" border='2px solid Black' />
                            <Text ml="20px" fontSize="20px">1000.00+</Text>
                        </Box>
                    </Box>


                    <Box gap='1' mt="20px">
                        <Heading>Brand</Heading>
                        <Input type="text" placeholder="Search product Brand" mt="10px" ></Input>
                    </Box>

                    <Box gap='1' mt="20px">
                        <Heading>Color</Heading>
                        <Box display="flex">
                            <Input type='checkbox' w="3" h="7" border='2px solid Black' />
                            <Text ml="20px" fontSize="15px">BLACK-PEACH-BLUE</Text>
                        </Box>
                        <Box display="flex">
                            <Input type='checkbox' w="3" h="7" border='2px solid Black' />
                            <Text ml="20px" fontSize="15px">BLACK-PISTA-BLUE</Text>
                        </Box>
                        <Box display="flex">
                            <Input type='checkbox' w="3" h="7" border='2px solid Black' />
                            <Text ml="20px" fontSize="15px">BLACK-PEACH-PEACH</Text>
                        </Box>
                        <Box display="flex">
                            <Input type='checkbox' w="3" h="7" border='2px solid Black' />
                            <Text ml="20px" fontSize="15px">BLUE-PISTA-PEACH</Text>
                        </Box>
                    </Box>
                    <Box gap='1'>
                        <Heading>Size</Heading>
                        <Box display="flex">
                            <Input type='checkbox' w="3" h="7" border='2px solid Black' />
                            <Text ml="20px" fontSize="20px">Small</Text>
                        </Box>
                        <Box display="flex">
                            <Input type='checkbox' w="3" h="7" border='2px solid Black' />
                            <Text ml="20px" fontSize="20px">Medium</Text>
                        </Box>
                        <Box display="flex">
                            <Input type='checkbox' w="3" h="7" border='2px solid Black' />
                            <Text ml="20px" fontSize="20px">Large</Text>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Spacer />
        </div>
    )
}

export default Sidebar