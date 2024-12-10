import { totalCountVariants } from "@/constants"
import { Card, Skeleton } from "antd"
import { Text } from "../text"
import { AreaConfig } from "@ant-design/plots"
import TinyAreaChart from "@ant-design/plots/es/components/tiny/area"

type Props = {
  resource: "companies" | "contacts" | "deals",
  isLoading: boolean,
  totalCount?: number
}

const DashboardTotalCountCard = ({
  resource,
  isLoading,
  totalCount
}: Props) => {
  const { primaryColor, icon, title } = totalCountVariants[resource];

  const config: AreaConfig = {
    data: totalCountVariants[resource].data,
    xField: "index",
    yField: "value",
    autoFit: true,
    padding: 0,
    tooltip: false,
    line: {
      color: primaryColor,
    },
  };

  return (
    <Card
      style={{ height: "120px", padding: 0}}
      bodyStyle={{ padding: '8px 8px 8px 12px' }}
      size="small"
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          whiteSpace: 'nowrap'
        }}
      >
        {icon}
        <Text size="md" className="secondary" style={{marginLeft: '8px'}}>
          {title}
        </Text>
      </div>
      <div
        style={{ display: 'flex', justifyContent: 'space-between',}}
      >
        <Text
          size="xxxl"
          strong
          style={{
            flex: 1,
            whiteSpace: 'nowrap',
            flexShrink: 0,
            textAlign: 'start',
            marginLeft: '48px',
            fontVariantNumeric: 'tabular-nums'
          }}
        >
          {isLoading ? (
            <Skeleton.Button 
              style={{
                marginTop: '8px',
                width: '74px'
              }}
            />
          ) : (
            totalCount
          )}
        </Text>
        <TinyAreaChart {...config} style={{width: '50%'}}/>
      </div>
    </Card>
  )
}

export default DashboardTotalCountCard