"use client";

import { useEffect, useRef, useState } from "react";

declare global {
    interface Window {
        kakao: any;
    }
}

interface KakaoMapProps {
    address: string;
    detailAddress: string;
}

export default function KakaoMap({ address, detailAddress }: KakaoMapProps) {
    const mapRef = useRef<HTMLDivElement>(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const loadKakaoMapScript = () => {
            const script = document.createElement("script");
            script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_KEY}&libraries=services&autoload=false`;
            script.async = true;
            script.onload = () => {
                window.kakao.maps.load(() => {
                    setIsLoaded(true);
                });
            };
            document.head.appendChild(script);
        };

        if (!window.kakao) {
            loadKakaoMapScript();
        } else {
            setIsLoaded(true);
        }
    }, []);

    useEffect(() => {
        if (!isLoaded || !mapRef.current) return;

        const kakao = window.kakao;

        // 지도 옵션
        const mapOption = {
            center: new kakao.maps.LatLng(35.2272, 129.0037), // 임시 좌표
            level: 3,
        };

        const map = new kakao.maps.Map(mapRef.current, mapOption);

        // 주소-좌표 변환 객체 생성
        const geocoder = new kakao.maps.services.Geocoder();

        // 주소로 좌표를 검색
        geocoder.addressSearch(address, function (result: any, status: any) {
            if (status === kakao.maps.services.Status.OK) {
                const coords = new kakao.maps.LatLng(result[0].y, result[0].x);

                // 커스텀 오버레이 콘텐츠 (별 마커)
                const markerContent = `
          <div class="custom-marker" style="position: relative; cursor: pointer;">
            <div class="marker-star" style="
              width: 32px;
              height: 32px;
              background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              box-shadow: 0 4px 12px rgba(251, 191, 36, 0.4);
              transition: all 0.3s ease;
            ">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white" style="filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <div class="marker-tooltip" style="
              position: absolute;
              top: -80px;
              left: 50%;
              transform: translateX(-50%) scale(0);
              background: white;
              padding: 12px 16px;
              border-radius: 8px;
              box-shadow: 0 4px 12px rgba(0,0,0,0.15);
              white-space: nowrap;
              opacity: 0;
              transition: all 0.3s ease;
              pointer-events: none;
              z-index: 10;
            ">
              <div style="
                font-size: 14px;
                font-weight: 600;
                color: #0f172a;
                margin-bottom: 4px;
              ">빛나는 별 심리상담센터</div>
              <div style="
                font-size: 12px;
                color: #64748b;
              ">${detailAddress}</div>
              <div style="
                position: absolute;
                bottom: -6px;
                left: 50%;
                transform: translateX(-50%);
                width: 0;
                height: 0;
                border-left: 6px solid transparent;
                border-right: 6px solid transparent;
                border-top: 6px solid white;
              "></div>
            </div>
          </div>
        `;

                // 커스텀 오버레이 생성
                const customOverlay = new kakao.maps.CustomOverlay({
                    position: coords,
                    content: markerContent,
                    yAnchor: 1.2,
                });

                customOverlay.setMap(map);

                // 지도 중심을 마커 위치로 설정
                map.setCenter(coords);

                // 마커 호버 이벤트 (DOM 접근)
                setTimeout(() => {
                    const markerElement = document.querySelector(
                        ".custom-marker",
                    ) as HTMLElement;
                    const starElement = document.querySelector(
                        ".marker-star",
                    ) as HTMLElement;
                    const tooltipElement = document.querySelector(
                        ".marker-tooltip",
                    ) as HTMLElement;

                    if (markerElement && starElement && tooltipElement) {
                        markerElement.addEventListener("mouseenter", () => {
                            // 별 빛나는 효과
                            starElement.style.transform = "scale(1.15)";
                            starElement.style.boxShadow =
                                "0 6px 20px rgba(251, 191, 36, 0.6), 0 0 0 4px rgba(251, 191, 36, 0.2)";
                            starElement.style.animation =
                                "pulse 1s ease-in-out infinite";

                            // 툴팁 표시
                            tooltipElement.style.transform =
                                "translateX(-50%) scale(1)";
                            tooltipElement.style.opacity = "1";
                        });

                        markerElement.addEventListener("mouseleave", () => {
                            // 별 원래대로
                            starElement.style.transform = "scale(1)";
                            starElement.style.boxShadow =
                                "0 4px 12px rgba(251, 191, 36, 0.4)";
                            starElement.style.animation = "none";

                            // 툴팁 숨기기
                            tooltipElement.style.transform =
                                "translateX(-50%) scale(0)";
                            tooltipElement.style.opacity = "0";
                        });
                    }
                }, 100);
            }
        });
    }, [isLoaded, address, detailAddress]);

    return (
        <>
            <style jsx global>{`
                @keyframes pulse {
                    0%,
                    100% {
                        box-shadow:
                            0 6px 20px rgba(251, 191, 36, 0.6),
                            0 0 0 4px rgba(251, 191, 36, 0.2);
                    }
                    50% {
                        box-shadow:
                            0 6px 24px rgba(251, 191, 36, 0.8),
                            0 0 0 8px rgba(251, 191, 36, 0.3);
                    }
                }
            `}</style>
            <div ref={mapRef} className="w-full aspect-[16/9] rounded-t-xl" />
        </>
    );
}
